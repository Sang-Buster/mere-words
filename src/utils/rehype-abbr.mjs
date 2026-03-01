/**
 * Custom rehype plugin to support abbreviation definitions in markdown.
 *
 * Syntax (PHP Markdown Extra style):
 *   *[ABBR]: Full description text
 *
 * Any occurrence of ABBR in the document will be wrapped in
 * <abbr title="Full description text">ABBR</abbr>.
 *
 * The definition paragraphs are removed from the output.
 */

import { visit } from 'unist-util-visit';

const ABBR_DEF_RE = /^\*\[([^\]]+)\]:\s*(.+)$/;

export default function rehypeAbbr() {
    return (tree) => {
        const abbreviations = new Map();

        // First pass: find and collect abbreviation definitions, mark for removal
        const toRemove = [];
        visit(tree, 'element', (node, index, parent) => {
            if (node.tagName !== 'p' || !parent) return;

            // Get plain text content of the paragraph
            const text = getTextContent(node).trim();

            // Check if ALL lines in this paragraph are abbreviation definitions
            const lines = text.split('\n');
            const defs = [];
            for (const line of lines) {
                const match = line.trim().match(ABBR_DEF_RE);
                if (match) {
                    defs.push({ abbr: match[1], title: match[2] });
                } else if (line.trim() === '') {
                    continue;
                } else {
                    return; // Not a pure abbreviation-definition paragraph
                }
            }

            if (defs.length === 0) return;

            for (const { abbr, title } of defs) {
                abbreviations.set(abbr, title);
            }
            toRemove.push({ parent, index });
        });

        // Remove definition paragraphs (in reverse to preserve indices)
        for (const { parent, index } of toRemove.reverse()) {
            parent.children.splice(index, 1);
        }

        if (abbreviations.size === 0) return;

        // Build a regex matching any defined abbreviation (longest first)
        const sorted = [...abbreviations.keys()].sort((a, b) => b.length - a.length);
        const pattern = new RegExp(`\\b(${sorted.map(escapeRegExp).join('|')})\\b`, 'g');

        // Second pass: replace text nodes with abbreviation elements
        visit(tree, 'text', (node, index, parent) => {
            if (!parent || parent.tagName === 'code' || parent.tagName === 'pre') return;

            const parts = splitText(node.value, pattern, abbreviations);
            if (parts.length <= 1) return;

            parent.children.splice(index, 1, ...parts);
            return index + parts.length;
        });
    };
}

function getTextContent(node) {
    if (node.type === 'text') return node.value;
    if (node.children) return node.children.map(getTextContent).join('');
    return '';
}

function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function splitText(text, pattern, abbreviations) {
    const parts = [];
    let lastIndex = 0;

    for (const match of text.matchAll(pattern)) {
        if (match.index > lastIndex) {
            parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
        }
        const abbr = match[1];
        parts.push({
            type: 'element',
            tagName: 'abbr',
            properties: { title: abbreviations.get(abbr) },
            children: [{ type: 'text', value: abbr }]
        });
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push({ type: 'text', value: text.slice(lastIndex) });
    }

    return parts;
}
