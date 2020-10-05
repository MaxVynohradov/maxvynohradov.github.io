import { MdxHeader1, MdxHeader2, MdxHeader3, MdxHeader4, MdxHeader5, MdxHeader6 } from './headers';
import { MdxListItem, MdxOrderedList, MdxUnorderedList } from './lists';
import { MdxBlockquote, MdxHr, MdxImg, MdxLink, MdxParagraph, MdxThematicBreak } from './misc';
import { MdxTable, MdxTableBody, MdxTableCell, MdxTableHead, MdxTableHeaderCell, MdxTableRow } from './tables';
import { MdxCodeBlock, MdxDeleteText, MdxEmText, MdxInlineCodeBlock, MdxPreBlock, MdxStrongText } from './typography';

export const mdxProviderComponentsList = {
  p: MdxParagraph,
  h1: MdxHeader1,
  h2: MdxHeader2,
  h3: MdxHeader3,
  h4: MdxHeader4,
  h5: MdxHeader5,
  h6: MdxHeader6,
  thematicBreak: MdxThematicBreak,
  blockquote: MdxBlockquote,
  ul: MdxUnorderedList,
  ol: MdxOrderedList,
  li: MdxListItem,
  table: MdxTable,
  thead: MdxTableHead,
  tbody: MdxTableBody,
  tr: MdxTableRow,
  td: MdxTableCell,
  th: MdxTableHeaderCell,
  pre: MdxPreBlock,
  code: MdxCodeBlock,
  em: MdxEmText,
  strong: MdxStrongText,
  del: MdxDeleteText,
  inlineCode: MdxInlineCodeBlock,
  hr: MdxHr,
  a: MdxLink,
  img: MdxImg,
};
