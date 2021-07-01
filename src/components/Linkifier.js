import Linkify from 'react-linkify'

const Linkifier = ({ value }) => (
  <Linkify
    componentDecorator={(decoratedHref, decoratedText, key) => {
      const splittedDecoratedText = decoratedText.split("://")
      return (
        <a target="blank" href={decoratedHref} key={key} class="linkifier-link">
          {splittedDecoratedText[splittedDecoratedText.length - 1]}
        </a>
      )
    }}
  >
    <div dangerouslySetInnerHTML={ { __html: value } } />
  </Linkify>
)

export default Linkifier
