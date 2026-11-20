import { type MarkedOptions, MarkedRenderer, type MarkedToken } from '@fsegurai/ngx-markdown';
import type { AnchorService } from '@shared/anchor';

export function markedOptionsFactory(anchorService: AnchorService): MarkedOptions {
  const renderer = new MarkedRenderer();

  // fix `href` for an absolute link with fragments so that _copy-paste_ urls are correct
  renderer.link = ({ href, title, tokens, text, raw }: MarkedToken.Link) => {
    const normalizedHref = anchorService.normalizeExternalUrl(href);
    return MarkedRenderer.prototype.link.call(renderer, {
      type: 'link',
      raw,
      href: normalizedHref,
      title,
      text,
      tokens,
    });
  };

  return { renderer };
}
