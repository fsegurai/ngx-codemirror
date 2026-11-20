/** The host layout every mode shares: the editor fills the frame below the optional chunk navigator. */
export const MODE_STYLES = `
  :host {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    min-height: 0;
  }

  .editor {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
  }
`;
