import { BasePage } from "../pages/BasePage";

export class BaseArticleContentBlock extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
  }
}