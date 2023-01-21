import { LineV } from "../separatorLine/Line";
import "../../assets/styles/footer.css";
const FooterItem = ({ text, color = "blue" }) => {
  return (
    <div className="item">
      <div className="item-con">
        <p className={color}> {text}</p>
        <LineV />

      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="Footer-container">
      <FooterItem text="وبلاگ های به روز شده " />
      <FooterItem text="فهرست وبلاگ ها " />
      <FooterItem text="ثبت وبلاگ جدید " />
      <FooterItem text="راهنما" />
      <FooterItem text="تبلیغات در وبلاگ " color="red" />
      <FooterItem text="گزارش تخلف " />
      <FooterItem text="اخبار سایت " />
      <FooterItem text="تماس با ما" />
    </div>
  );
};
export default Footer;
