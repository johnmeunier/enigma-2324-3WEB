const Intro = ({codeText}) => <p>
  Edit <code>{codeText}</code> and save to reload.
</p>

export default ({codeText, link, children}) => (
  <>
    <Intro codeText={codeText} />
    <a
      className="App-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </>
);