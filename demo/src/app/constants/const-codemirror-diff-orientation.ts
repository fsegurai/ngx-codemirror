import { Orientation, RevertControls } from "ngx-codemirror";

export const CodeMirrorDiffOrientation = [
  { viewValue: 'a-b', value: 'a-b' as Orientation },
  { viewValue: 'b-a', value: 'b-a' as Orientation },
];

export const CodeMirrorDiffRevControls = [
  { viewValue: 'a-to-b', value: 'a-to-b' as RevertControls },
  { viewValue: 'b-to-a', value: 'b-to-a' as RevertControls },
  { viewValue: 'none', value: '' as RevertControls },
];