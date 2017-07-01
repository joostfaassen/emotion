import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'emotion/react'
import colors from 'open-color'

// what if css returned an object

const A = css`
  color: green;
`

// returns

const ret = {
  className: 'css-A-12345',
  rules: [`.css-A-12345 { color:green }`],
  toString () { return this.className }
}

const MarkdownContainer = styled('div')`
  display: flex;
  margin: 16px auto 0 auto;
  max-width: 560px;
  font-family: 'Oxygen';
  
  & h1, h2, h3, h4, h5 {
    margin: 16px 0 8px 0;
    letter-spacing: 1px;
  }
`

const Link = styled('a')`
  font-size: 1rem;
  margin-left: auto;
  margin-right: 8px;
  text-decoration: none;
  color: #8c81d8;
  
  p & {
    margin: 0;
  }
  
  &:hover {
    color: #ffd43b;
  }
`

const Paragraph = styled('p')`
  margin: 16px 0;
  padding: 2px;
  font-size: 0.85rem;
  color: ${colors.gray[8]};
`

const Code = styled('code')`
  font-family: monospace;
  font-size: 0.75rem;
  color: ${colors.gray[8]};
  background-color: ${colors.gray[1]};
  padding: 1px;
  
  p & {
    font-size: 0.99rem;
  }
`

const CodeBlock = styled('pre')`
  margin: 0;
  padding: 4px;
  color: ${colors.gray[6]};
  background-color: ${colors.gray[1]};
  border-radius: attr(radius, 6px);
`

export default ({ markdown }) => {
  return (
    <MarkdownContainer>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link,
          Paragraph,
          Code,
          CodeBlock: props => {
            return (
              <CodeBlock key={props.nodeKey} className={props.className}>
                <Code>{props.literal}</Code>
              </CodeBlock>
            )
          }
        }}
      />

    </MarkdownContainer>
  )
}
