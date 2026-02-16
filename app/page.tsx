// * Next.js
import Link from 'next/link';

// * Components
import Button from '@/components/Button/Button';

// * Types
import { EButton } from '@/types/button.types';

const Home = () => {
  return (
    <section className="wrapper content items-center gap-24">
      <h1 className="text-6xl mt-6">HelloBiome</h1>
      <div className="flex flex-col gap-3.5 items-center">
        <p className="text-3xl ">
          Hi! Here you can explore skin microbiome data.
        </p>
        <Link href="/research">
          <Button type={EButton.BUTTON} text="Explore Data" />
        </Link>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eligendi
        soluta dolorem est! Animi ipsa, harum, quisquam vitae facere minima,
        unde sunt nam rem doloremque id eum? Quia, excepturi quod! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Accusantium est
        perferendis fugit ad voluptatem, natus architecto, nihil commodi nemo
        illo molestiae incidunt nulla dicta aspernatur harum quos debitis
        corporis velit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iusto minima in odio omnis, quae nihil, harum tempora nesciunt
        perferendis deserunt labore? Natus eos dolorum quo deleniti, sed neque
        veritatis accusamus?
      </p>
    </section>
  );
};

export default Home;
