import styles from "./CheckList.module.css";
import checkbostIcon from '../../../common/icon/fi-rr-checkbox.svg';

const checklistItems = [
  "졸업 논문 심사",
  "최소 전공 이수 63학점",
  "최소 종합 이수 130학점",
  "교양 이수 12학점",
  "계열교육 이수 6학점",
  "자기계발 이수 2학점",
  "인성교육 이수 4학점",
  "공통교육 이수 8학점",
  "사회봉사 30시간",
  "외국어 인증 패스",
  "평점 평균 2.8점"
];

function CheckList() {
  return (
    <div className={styles.checkList}>
      <div className={styles.checkListTitleWrapper}>
        <div className={styles.checkListTitle}>졸업 체크리스트</div>
        <div className={styles.checkListSubTitle}>2020년 교육과정 적용</div>
      </div>
      <div className={styles.checkListCheckBox}>
        {checklistItems.map((item, index) => (
          <div key={index} className={styles.checkListContent}>
            <img src={checkbostIcon} alt="checkbox icon" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckList;