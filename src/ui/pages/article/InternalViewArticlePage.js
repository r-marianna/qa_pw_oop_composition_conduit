import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorsArticleContentBlock } from '../../components/AuthorsArticleContentBlock'

export class InternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
    this.authorsArticleContentBlock =
      new AuthorsArticleContentBlock(this.page, userId);
  }
}
