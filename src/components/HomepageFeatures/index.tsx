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
    imageUrl: require('@site/static/img/with_Jesus_cave.jpeg').default,
    description: (
      <>
        Meet Jesus and learn the Word of the Age.
      </>
    ),
  },
  {
    title: 'Pray for the World',
    imageUrl: require('@site/static/img/with_Jesus_mountain.jpeg').default,
    description: (
      <>
        Establish conditions through prayer for the salvation of the world.
      </>
    ),
  },
  {
    title: 'Begin the Sumni',
    imageUrl: require('@site/static/img/with_Jesus_Alpha.jpeg').default,
    description: (
      <>
        Share the New Word with Jesus and begin the Providential History of Sumni.
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
