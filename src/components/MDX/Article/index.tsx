import type { PropsWithChildren } from 'react'
import styles from './article.module.scss'

const Article = (props: PropsWithChildren) => (
	<article className={styles.article}>{props.children}</article>
)

export default Article
