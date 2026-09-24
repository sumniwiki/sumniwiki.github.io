import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Meet Jesus',
    imageUrl: require('@site/static/img/with_Jesus_cave.jpg').default,
    description: (
      <>
        Meet Jesus and learn the God's Word for our time.
      </>
    ),
  },
  {
    title: 'Pray',
    imageUrl: require('@site/static/img/with_Jesus_mountain.jpg').default,
    description: (
      <>
        Pray for the salvation of the world.
      </>
    ),
  },
  {
    title: 'Begin the Sumni',
    imageUrl: require('@site/static/img/with_Jesus_Alpha.jpg').default,
    description: (
      <>
        Begin the providential history of Sumni by spreading the God's Word for the new age.
      </>
    ),
  },
];

function Feature({title, imageUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageUrl} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
