// 1. SVG 컴포넌트로 import
import InfoIcon from '../../common/icon/fi-sr-info.svg';

import styles from './Caution.module.css';

function Caution() {
    return <div className={styles.wrapp_caution}>
        <div className={styles.wrapp_caution_contain}>
            <div className={styles.left_icon_caution}>
                <img src={InfoIcon} alt="Info Icon" />
            </div>
            <div className={styles.right_cation}>
                <div className={styles.caution_title}>유의 사항</div>
                <div className={styles.caution_content}>
                    <div className={styles.caution_content_top}>
                        본 Compass 리포트는 사용자의 동의를 얻어 첨부받은 학사 데이터에 기반하고 있습니다.</div>
                    <div className={styles.caution_content_bottom}>
                        본 리포트는 졸업사정 판별을 위한 참고 목적으로 활용할 수 있도록 제공되며, 증빙 등의 다른 목적으로는 사용할 수 없습니다.</div>
                </div>
            </div>
        </div>

    </div>;
}




export default Caution