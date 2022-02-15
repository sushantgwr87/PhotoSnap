import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SVGIcon from "./SVGIcon";
import useMountTransition from "../customHook/useMountTransition";
import styles from '../../styles/alert.module.css';

const Alert = ({ toast }) => {
    
    const [isBrowser, setIsBrowser] = useState(false);
    const [list, setList] = useState(toast);

    const hasTransitionedIn = useMountTransition(list && list.length > 0, 500);

    useEffect(() => {
        setIsBrowser(true)
        setList([...toast]);

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (toast.length && list.length) {
                deleteToast(toast[0].id);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        }

        // eslint-disable-next-line
    }, [toast, list]);

    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toast.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toast.splice(toastListItem, 1);
        setList([...list]);
    }

    const customAlert =
        hasTransitionedIn &&
        (
            <div className={`${styles.alert_container} ${styles.top_left}`}>
                {
                    list.map((toast, i) =>
                        <div
                            key={i}
                            className={`${styles.alert} ${styles.toast} ${styles.top_left}`}
                        >
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                            <div className={styles.alert_image}>
                                <SVGIcon name={toast.title} />
                            </div>
                            <div>
                                <p className={styles.alert_title}>{toast.title}</p>
                                <p className={styles.alert_message}>
                                    {toast.message}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        )

    if (isBrowser) {
        return ReactDOM.createPortal(
            customAlert,
            document.getElementById("alert")
        );
    } else {
        return null;
    }
}

export default Alert;