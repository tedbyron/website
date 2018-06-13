---
title: Markdown
category: Markup
section: Languages
edited: 6/9/18
---

# Markdown

1.  [Resources](#resources)
2.  [Headings](#headings)
3.  [Text](#text)
4.  [Lists](#lists)
5.  [Links](#links)
6.  [Images](#images)
7.  [Code](#code)
8.  [Tables](#tables)
9.  [Blockquotes](#blockquotes)
10. [Comments](#comments)
11. [Backslash Escapes](#backslash-escapes)
12. [Inline HTML](#inline-html)
13. [GitHub Styles](#github-styles)

## **Resources**

-   [Daring Fireball](https://daringfireball.net/projects/markdown/)
    -   Original Markdown specifications

## **Headings**

-   `<h1> <h2> <h3> <h4> <h5> <h6>`

    ```markdown
    # H1
    ## H2
    ### H3
    #### H4
    ##### H5
    ###### H6
    ```
-   Alternatively, for `<h1>` and `<h2>`

    ```markdown
    H1
    ======
    H2
    ------
    ```

## **Text**

-   <code><em>&lt;em&gt;</em></code>
    -  `*asterisks*` or `_underscores_`
-   <code><strong>&lt;strong&gt;</strong></code>
    -   `**asterisks**` or `__underscores__`
-   <code><em><strong>&lt;em&gt; and &lt;strong&gt;</strong></em></code>
    -   `***asterisks***` or `___underscores___`
-   <code><del>&lt;del&gt;</del></code>
    -   `~~two tildes~~`

## **Lists**

-   `<ul>`

    ```markdown
    *   Unordered list items can use asterisks
    -   Or minuses
    +   Or pluses
    ```
-   `<ol>`

    ```markdown
    1.  First ordered list item
    2.  Another item
        -   Unordered sub-list
    3.  Actual numbers do not matter, just that it is a number
        1.  Ordered sub-list
    4.  And another item
    ```
-   Task lists
    ```markdown
    -   [ ] Unchecked item
    -   [x] Checked item
    ```
    -   [ ] Unchecked item
    -   [x] Checked item


## **Links**

-   `<a>`
    -   Markdown will automatically parse links
        -   `http://AutomaticLink.com` or `<http://AutomaticLink.com>`
    -   If you want to change the text or alt text, use inline links
        -   `[Link text here](https://www.google.com)`
        -   `[Link with alt text](https://www.google.com "Google's Homepage")`
        -   `[Link with a relative path](/languages/markup/markdown.md)`
    -   If you want to organize links differently, use reference links
        ```markdown
        [Reference link][Case-insensitive reference here]
        [cAsE-iNsEnsItivE rEfeRenCe heRe]: https://www.mozilla.org
        ```
        ```markdown
        [Use numbers for reference-style link definitions][1]
        [1]: http://slashdot.org
        ```
        -   The `[link text itself]` can be used as a reference
            -   `[link text itself]: http://www.reddit.com`

## **Images**

-   `<img>`
    -   Inline
        ```markdown
        ![Alt text](https://octodex.github.com/images/daftpunktocat-guy.gif "Optional title text")
        ```
        <img width="150px" src="https://octodex.github.com/images/daftpunktocat-guy.gif" alt="Alt text" title="Optional title text" />
    -   Reference
        ```markdown
        ![Alt text][daftpunktocat-thomas]
        [daftpunktocat-thomas]: https://octodex.github.com/images/daftpunktocat-thomas.gif "Optional title text"
        ```
        <img width="150px" src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="Alt text" title="Optional title text" />

## **Code**

-   `<code>`
    -   Inline `code` has \`backticks\` around it
    -   Code blocks have three backticks wrapping them on top and bottom, and a syntax highlighting language can be specified after the top three

            ```js
            var s = "Specify the grammar after the first three backticks";
            alert(s);
            ```

        ```js
        var s = "Specify the grammar after the first three backticks";
        alert(s);
        ```

## **Tables**

<ul><li><code>&lt;table&gt;</code></li><ul><li><code>&lt;th&gt;</code></li><ul><li>Elements are made with hyphens under them</li><li>Align table headers with colons</li></ul><li><code>&lt;td&gt;</code></li><ul><li>Elements are separated with pipes</li></ul></ul><pre><code>| left-aligned      | centered              | right-aligned         |
| ----------------- |:---------------------:| ---------------------:|
| Lorem ipsum dolor | sit amet, consectetur | adipisicing elit, sed |
| $1                | $2                    | $333,333,333.00       |
| doggos            | are neat              | yes                   |
</code></pre><table><tr><th align="left">left-aligned</th><th align="center">centered</th><th align="right">right-aligned</th></tr><tr><td>Lorem ipsum dolor</td><td>sit amet, consectetur</td><td>adipisicing elit, sed</td></tr><tr><td>$1</td><td>$2</td><td>$333,333,333.00</td></tr><tr><td>doggos</td><td>are neat</td><td>yes</td></tr></table><ul><li>Spacing does not matter within the table</li><pre><code>Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
</code></pre><table><tr><th>Markdown</th><th>Less</th><th>Pretty</th></tr><tr><td>Still</td><td>renders</td><td>nicely</td></tr><tr><td>1</td><td>2</td><td>3</td></tr></table></ul></ul>

## **Blockquotes**

-   `<blockquote>`

    ```markdown
    > Blockquotes are useful in emails.
    > ***Markdown*** in blockquotes is not always parsed.
    ```
    -   There is no Markdown syntax for `<cite>`

## **Comments**

-   `<!-- comment -->`
    -   Use a link to an empty fragment as a comment that will not appear after parsing
        ```markdown
        [comment]: # (Type your comment in here)
        [//]: # "Another way to made this style comment"
        ```

## **Backslash Escapes**

-   Markdown provides backslash escapes for certain characters
    ```
    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
    +   plus sign
    -   hyphen
    .   dot
    !   exclamation mark
    ```

## **Inline HTML**

```html
<dl>
  <dt>Inline HTML can be used in Markdown</dt>
  <dd>But Markdown is meant to be an easy writing format</dd>

  <dt>Do not use Markdown in HTML</dt>
  <dd>Markdown in HTML is not always parsed, use <strong>HTML</strong> tags</dd>
</dl>
```

## **GitHub Styles**

-   Within GitHub communication fields, but not in repository files
    -   The `@` symbol can be used to mention and notify another GitHub user, team, or organization
        ```
        @tedbyron
        @github
        ```
    -   Any reference to a commit’s SHA-1 hash will be automatically converted into a link to that commit on GitHub
        ```
        965cd0ca6d10b452b56d00745eebf38cfa26a168
        tedbyron@965cd0ca6d10b452b56d00745eebf38cfa26a168
        tedbyron/info@965cd0ca6d10b452b56d00745eebf38cfa26a168
        ```
    -   Any number that refers to an issue or pull request will be automatically converted into a link
        ```
        #1
        tedbyron#1
        tedbyron/info#1
        ```
