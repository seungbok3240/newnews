import { SearchBar } from "../../components/SearchBar";
import styles from "../../styles/SearchPages.module.scss"
import { Button } from "../../components/Button";
import { ArticleCard} from "../../components/ArticleCard"
export function SearchPages(){
    
    return (
        <section className={styles.searchSection}>
            <SearchBar/>
            <div>
                <h1 className={styles.popularSearchTerms}>
                    추천검색어
                </h1>
                {/* <div>
                    추천검색어 올라오는 곳
                </div> */}
            </div>
        </section>

    )
}