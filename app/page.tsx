import Container from '@/components/container';
import FooterLayout from '@/components/layout/footer-layout';
import GridLayout from '@/components/layout/grid-layout';
import { gridItems, lgLayout, mdLayout, smLayout } from '@/config/layouts';
import { me } from '@/config/me';

export default function Home() {
    return (
        <>
            <header>
                <Container className='flex items-center justify-between pt-9'>
                    <h1 className='hidden'>{me.name}</h1>
                </Container>
            </header>
            <main>
                <GridLayout
                    lgLayout={lgLayout}
                    mdLayout={mdLayout}
                    smLayout={smLayout}>
                    {gridItems.map((item) => (
                        <div key={item.i}>{<item.component />}</div>
                    ))}
                </GridLayout>
            </main>
            <FooterLayout />
        </>
    );
}
