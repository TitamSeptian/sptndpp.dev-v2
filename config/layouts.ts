import Contact from '@/components/grid/contact';
import Description from '@/components/grid/description';
import LinkedIn from '@/components/grid/linkedin';
import Valorant from '@/components/grid/valorant';
import Spotify from '@/components/grid/spotify';
import Theme from '@/components/grid/theme';
import { Layout } from 'react-grid-layout';
import { getArticles, IArticle } from '@/lib/getArticles';
import ArticleCard from '@/components/grid/article-card';

interface GridItem {
    i: string;
    component: () => JSX.Element;
}

const articles: IArticle[] = getArticles();

export const gridItems: GridItem[] = [
    { i: 'description', component: Description },
    { i: 'valorant', component: Valorant },
    { i: 'linkedin', component: LinkedIn },
    { i: 'theme', component: Theme },
    { i: 'spotify', component: Spotify },
    { i: 'contact', component: Contact },
];

export const lgLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 1 },
    { i: 'valorant', x: 2, y: 0, w: 1, h: 1 },
    { i: 'spotify', x: 0, y: 1, w: 1, h: 1 },
    { i: 'linkedin', x: 1, y: 1, w: 1, h: 1 },
    { i: 'theme', x: 3, y: 2, w: 1, h: 1 },
    { i: 'contact', x: 2, y: 3, w: 2, h: 1 },
];

export const mdLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'valorant', x: 2, y: 0, w: 2, h: 1 },
    { i: 'linkedin', x: 2, y: 1, w: 1, h: 1 },
    { i: 'theme', x: 3, y: 3, w: 1, h: 1 },
    { i: 'spotify', x: 0, y: 2, w: 2, h: 1 },
    { i: 'contact', x: 2, y: 4, w: 2, h: 2 },
];

export const smLayout: Layout[] = [
    { i: 'description', x: 0, y: 0, w: 2, h: 2 },
    { i: 'valorant', x: 0, y: 2, w: 2, h: 1 },
    { i: 'linkedin', x: 0, y: 3, w: 1, h: 1 },
    { i: 'theme', x: 1, y: 5, w: 1, h: 1 },
    { i: 'spotify', x: 0, y: 6, w: 2, h: 2 },
    { i: 'article', x: 0, y: 9, w: 2, h: 2 },
    { i: 'contact', x: 2, y: 11, w: 2, h: 2 },
];

// articles layout (dynamic)
articles.forEach((article, index) => {
  gridItems.push({
    i: `article-${index}`,
    component: () => <ArticleCard {...article} />,
  });

  const lgBaseY = 10; 
  const mdBaseY = 10; 
  const smBaseY = 10; 

  
  const x = index % 4;
  const y = lgBaseY + Math.floor(index / 4); 

  lgLayout.push({ i: `article-${index}`, x, y, w: 1, h: 1 });
  mdLayout.push({ i: `article-${index}`, x, y, w: 2, h: 1 }); 
  smLayout.push({ i: `article-${index}`, x: 0, y: smBaseY + index, w: 2, h: 1 }); 
});