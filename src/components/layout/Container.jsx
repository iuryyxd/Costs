import styles from './Container.module.css'

function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClasses]}`} >{props.children}</div>
    );
}

export default Container;