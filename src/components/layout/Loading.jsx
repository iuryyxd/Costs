import loading from '../../assets/loading.svg'
import styles from './Loading.module.css';

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img src={loading} alt="gif de loading" className={styles.loader} />
        </div>
    );
}

export default Loading;