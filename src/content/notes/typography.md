---
title: Typography & Markdown Guide
excerpt: A reference for all the markdown syntax available in articles — headings, text styles, lists, links, images, code, and more.
publishDate: 'Jan 1 2026'
hidden: true
seo:
  title: Typography & Markdown Guide
  description: A complete reference of markdown syntax and typography styles available on Mere Words.
---

## Headings

Headings from `h2` through `h6` are available. An `h1` is reserved for the article title and is automatically rendered.

## Heading Two

### Heading Three

#### Heading Four

##### Heading Five

###### Heading Six

---

## Paragraphs

This is a standard paragraph. Writing in markdown is simple, natural, and easy to read — even in its raw form. Each paragraph is separated by a blank line.

Here is a second paragraph to show spacing between blocks of text. You can write as much or as little as you like within a single paragraph. The text will wrap automatically.

---

## Emphasis

This is **bold text** and this is also __bold text__.

This is *italic text* and this is also _italic text_.

This is ~~strikethrough text~~.

You can combine emphasis: **bold and _italic_** or ***bold and italic*** together.

---

## Blockquotes

> Words can be like X-rays if you use them properly — they'll go through anything.
>
> — Aldous Huxley

Nested blockquotes:

> This is the first level of quoting.
>
> > This is a nested blockquote.
>
> Back to the first level.

---

## Lists

### Unordered List

- Item one
- Item two
  - Nested item one
  - Nested item two
- Item three

### Ordered List

1. First item
2. Second item
   1. Nested first item
   2. Nested second item
3. Third item

### Task List

- [x] Write the poem
- [x] Edit the poem
- [ ] Publish the poem

---

## Links

This is an [inline link](https://example.com).

This is an [inline link with a title](https://example.com "Example Website").

URLs can be written directly: https://example.com

---

## Images

Images can be included with alt text:

![A quiet place](../../assets/images/post-1.jpg)

---

## Code

Inline code: Use the `print()` function to output text.

Fenced code block:

```python
def hello():
    print("Hello, world!")

hello()
```

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Isabelle'));
```

```html
<article class="prose">
  <h1>My Poem</h1>
  <p>Words that breathe.</p>
</article>
```

---

## Tables

| Title         | Author       | Year |
| ------------- | ------------ | ---- |
| Milk and Honey| Rupi Kaur    | 2014 |
| The Sun and Her Flowers | Rupi Kaur | 2017 |
| Devotions     | Mary Oliver  | 2017 |

Right-aligned and centered columns:

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Content      | Content        | Content       |
| Words        | Words          | Words         |
| Text         | Text           | Text          |

---

## Horizontal Rules

Three or more hyphens, asterisks, or underscores create a horizontal rule:

---

## Line Breaks

For poetry and writing that needs  
deliberate line breaks,  
end a line with two spaces  
before pressing enter.

Or use a backslash:\
at the end of\
each line.

---

## Footnotes

Here is a sentence with a footnote[^1].

And another one[^2].

[^1]: This is the first footnote.
[^2]: This is the second footnote with more detail.

---

## Definition Lists

Term
: Definition of the term.

Poetry
: A literary work in which the expression of feelings and ideas is given intensity by the use of distinctive style and rhythm.

---

## Abbreviations

The HTML specification is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium

---

## Subscript and Superscript

H~2~O is water.

X^2^ is X squared.

---

## Keyboard Input

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

Press <kbd>Cmd</kbd> + <kbd>S</kbd> to save.

---

## Mark / Highlight

This is <mark>highlighted text</mark> for emphasis.

---

## Summary

This page demonstrates the full range of available markdown syntax. Use it as a reference when writing your poems and notes.
