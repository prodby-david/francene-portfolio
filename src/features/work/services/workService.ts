import { PortfolioItem, WorkCategory } from '../types/work.types';
import { PORTFOLIO_ITEMS } from '../constants/portfolioItems';

export const workService = {
  getAllProjects(): PortfolioItem[] {
    return PORTFOLIO_ITEMS;
  },

  getProjectsByCategory(category: WorkCategory): PortfolioItem[] {
    if (category === 'all') {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter((item) => item.category === category);
  },

  getProjectById(id: string): PortfolioItem | undefined {
    return PORTFOLIO_ITEMS.find((item) => item.id === id);
  },

  getCategoryCount(category: WorkCategory): number {
    if (category === 'all') {
      return PORTFOLIO_ITEMS.length;
    }
    return PORTFOLIO_ITEMS.filter((item) => item.category === category).length;
  },
};
