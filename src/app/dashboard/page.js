import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiHome5Line } from "react-icons/ri";
import "./dashboard.css";

import { IoSettingsOutline } from "react-icons/io5";
import {
  MdAnalytics,
  MdNotificationsNone,
  MdOutlineSmartDisplay,
} from "react-icons/md";
import { CiHeadphones } from "react-icons/ci";
import { GrArticle } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";

const sidebarData = [
  {
    icon: <RiHome5Line />,
    text: "Dashboard",
  },
  {
    icon: <IoDocumentText />,
    text: "Content",
  },
  {
    icon: <MdOutlinePersonOutline />,
    text: "Team",
  },
  {
    icon: <HiOutlineDesktopComputer />,
    text: "Dashboard",
  },
  {
    icon: <MdAnalytics />,
    text: "Dashboard",
  },
  {
    icon: <MdOutlineSmartDisplay />,
    text: "Dashboard",
  },
  {
    icon: <MdNotificationsNone />,
    text: "Dashboard",
  },
  {
    icon: <IoSettingsOutline />,
    text: "Dashboard",
  },
];

const types = [
  {
    icon: <GrArticle />,
    heading: "Articles",
    text: "4,950 New Updates",
  },
  {
    icon: <GrArticle />,
    heading: "Articles",
    text: "4,950 New Updates",
  },
  {
    icon: <GrArticle />,
    heading: "Articles",
    text: "4,950 New Updates",
  },
  {
    icon: <GrArticle />,
    heading: "Articles",
    text: "4,950 New Updates",
  },
];

const articles = [
  {
    img: "https://s3-alpha-sig.figma.com/img/4ff6/844d/4f86ff4a77123ece7ddd1fe82c2c13f8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkRnFSNVezIXPvjSezw4mBGCXxuLcO4KQEE1XYSCtL11RdgXwlHZtJ4nYDbHMA90akexx8ZiBsBi~J6idQr0C2rsJGS3qpF33uWPfTWRDi-NDsB3H1G6Qr-2q3uc44FQxwqM9tPtNcx4DZapKcYcn8Pc1M8o0BqAZjSDbosG15XhcPyGTVXjlKLic-EV~KVTiE0~m3zuVfjM1nx7PIKGaCdEr7K2WgSI60iIAJWkFZmxS5QcKX4k9ZLR2H9CZhI954LDXClthjLmAbNspxw6tkSmf0g144hut0FrNRV735TOeUSNJu-t3z5aGWCMX7Cvd6p5CexTn74ySRGIz3sqUA__",
    first: {
      heading: "BUSINESS",
      text: "20 Sep 2022",
      userImg:
        "https://s3-alpha-sig.figma.com/img/24ec/e0a1/20b72a899f9634f3484eed956498fb5c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QL8JYadn52N0OggbqjYVXXosbJXKfDEBUp00~1a4OLsK7muAvRDs3JAyalAVWxvoKpD5eU3nQW4F45J-WM~zqctg5tTm9qreIh1r--MvYY~61AF0b~Ulr6CCQ4fhm1mHG7UPq31Skb2WjN8Na~MB5HUqTKeW-kcKipg9isqdtonRGPjIR3xbyzES-YlNv5POs-jE1kWDSy4W0iEmpBcUhieReBifd1SjjuiVgmouivc09zyti9gtFtW-NQWbtl41J4d96p34wsmkvyDgPWs9ZkOrio3SVwCQ-S7ySYsVWD3UykMGo0Cp-uTsA~rfjR~Bg3SpMdXcHM1T13GyI4N5IQ__",
      userName: "Maria Doe ",
    },
    second: {
      heading: "7 Rules of Effective Branding",
      text: "Created",
    },
    third: {
      text: "Why Branding matters for your Business",
    },
    fourth: ["Branding", "Communication", "Branding"],
    icon: <BsThreeDots />,
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/4ff6/844d/4f86ff4a77123ece7ddd1fe82c2c13f8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkRnFSNVezIXPvjSezw4mBGCXxuLcO4KQEE1XYSCtL11RdgXwlHZtJ4nYDbHMA90akexx8ZiBsBi~J6idQr0C2rsJGS3qpF33uWPfTWRDi-NDsB3H1G6Qr-2q3uc44FQxwqM9tPtNcx4DZapKcYcn8Pc1M8o0BqAZjSDbosG15XhcPyGTVXjlKLic-EV~KVTiE0~m3zuVfjM1nx7PIKGaCdEr7K2WgSI60iIAJWkFZmxS5QcKX4k9ZLR2H9CZhI954LDXClthjLmAbNspxw6tkSmf0g144hut0FrNRV735TOeUSNJu-t3z5aGWCMX7Cvd6p5CexTn74ySRGIz3sqUA__",
    first: {
      heading: "BUSINESS",
      text: "20 Sep 2022",
      userImg:
        "https://s3-alpha-sig.figma.com/img/24ec/e0a1/20b72a899f9634f3484eed956498fb5c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QL8JYadn52N0OggbqjYVXXosbJXKfDEBUp00~1a4OLsK7muAvRDs3JAyalAVWxvoKpD5eU3nQW4F45J-WM~zqctg5tTm9qreIh1r--MvYY~61AF0b~Ulr6CCQ4fhm1mHG7UPq31Skb2WjN8Na~MB5HUqTKeW-kcKipg9isqdtonRGPjIR3xbyzES-YlNv5POs-jE1kWDSy4W0iEmpBcUhieReBifd1SjjuiVgmouivc09zyti9gtFtW-NQWbtl41J4d96p34wsmkvyDgPWs9ZkOrio3SVwCQ-S7ySYsVWD3UykMGo0Cp-uTsA~rfjR~Bg3SpMdXcHM1T13GyI4N5IQ__",
      userName: "Maria Doe ",
    },
    second: {
      heading: "7 Rules of Effective Branding",
      text: "Created",
    },
    third: {
      text: "Why Branding matters for your Business",
    },
    fourth: ["Branding", "Communication", "Branding"],
    icon: <BsThreeDots />,
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/4ff6/844d/4f86ff4a77123ece7ddd1fe82c2c13f8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkRnFSNVezIXPvjSezw4mBGCXxuLcO4KQEE1XYSCtL11RdgXwlHZtJ4nYDbHMA90akexx8ZiBsBi~J6idQr0C2rsJGS3qpF33uWPfTWRDi-NDsB3H1G6Qr-2q3uc44FQxwqM9tPtNcx4DZapKcYcn8Pc1M8o0BqAZjSDbosG15XhcPyGTVXjlKLic-EV~KVTiE0~m3zuVfjM1nx7PIKGaCdEr7K2WgSI60iIAJWkFZmxS5QcKX4k9ZLR2H9CZhI954LDXClthjLmAbNspxw6tkSmf0g144hut0FrNRV735TOeUSNJu-t3z5aGWCMX7Cvd6p5CexTn74ySRGIz3sqUA__",
    first: {
      heading: "BUSINESS",
      text: "20 Sep 2022",
      userImg:
        "https://s3-alpha-sig.figma.com/img/24ec/e0a1/20b72a899f9634f3484eed956498fb5c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QL8JYadn52N0OggbqjYVXXosbJXKfDEBUp00~1a4OLsK7muAvRDs3JAyalAVWxvoKpD5eU3nQW4F45J-WM~zqctg5tTm9qreIh1r--MvYY~61AF0b~Ulr6CCQ4fhm1mHG7UPq31Skb2WjN8Na~MB5HUqTKeW-kcKipg9isqdtonRGPjIR3xbyzES-YlNv5POs-jE1kWDSy4W0iEmpBcUhieReBifd1SjjuiVgmouivc09zyti9gtFtW-NQWbtl41J4d96p34wsmkvyDgPWs9ZkOrio3SVwCQ-S7ySYsVWD3UykMGo0Cp-uTsA~rfjR~Bg3SpMdXcHM1T13GyI4N5IQ__",
      userName: "Maria Doe ",
    },
    second: {
      heading: "7 Rules of Effective Branding",
      text: "Created",
    },
    third: {
      text: "Why Branding matters for your Business",
    },
    fourth: ["Branding", "Communication", "Branding"],
    icon: <BsThreeDots />,
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/4ff6/844d/4f86ff4a77123ece7ddd1fe82c2c13f8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkRnFSNVezIXPvjSezw4mBGCXxuLcO4KQEE1XYSCtL11RdgXwlHZtJ4nYDbHMA90akexx8ZiBsBi~J6idQr0C2rsJGS3qpF33uWPfTWRDi-NDsB3H1G6Qr-2q3uc44FQxwqM9tPtNcx4DZapKcYcn8Pc1M8o0BqAZjSDbosG15XhcPyGTVXjlKLic-EV~KVTiE0~m3zuVfjM1nx7PIKGaCdEr7K2WgSI60iIAJWkFZmxS5QcKX4k9ZLR2H9CZhI954LDXClthjLmAbNspxw6tkSmf0g144hut0FrNRV735TOeUSNJu-t3z5aGWCMX7Cvd6p5CexTn74ySRGIz3sqUA__",
    first: {
      heading: "BUSINESS",
      text: "20 Sep 2022",
      userImg:
        "https://s3-alpha-sig.figma.com/img/24ec/e0a1/20b72a899f9634f3484eed956498fb5c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QL8JYadn52N0OggbqjYVXXosbJXKfDEBUp00~1a4OLsK7muAvRDs3JAyalAVWxvoKpD5eU3nQW4F45J-WM~zqctg5tTm9qreIh1r--MvYY~61AF0b~Ulr6CCQ4fhm1mHG7UPq31Skb2WjN8Na~MB5HUqTKeW-kcKipg9isqdtonRGPjIR3xbyzES-YlNv5POs-jE1kWDSy4W0iEmpBcUhieReBifd1SjjuiVgmouivc09zyti9gtFtW-NQWbtl41J4d96p34wsmkvyDgPWs9ZkOrio3SVwCQ-S7ySYsVWD3UykMGo0Cp-uTsA~rfjR~Bg3SpMdXcHM1T13GyI4N5IQ__",
      userName: "Maria Doe ",
    },
    second: {
      heading: "7 Rules of Effective Branding",
      text: "Created",
    },
    third: {
      text: "Why Branding matters for your Business",
    },
    fourth: ["Branding", "Communication", "Branding"],
    icon: <BsThreeDots />,
  },
];

const Dashboard = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <div className="options">
          {sidebarData.map((i, ind) => (
            <div key={ind} className={`option ${ind == 1 ? "active" : ""}`}>
              {i.icon}
              <p> {i.text} </p>
            </div>
          ))}
        </div>

        <div className="contact">
          <CiHeadphones />
          <p>Contact Support</p>
        </div>
      </div>
      <div className="main-content">
        <div className="content-heading">
          <h2>Hello Admin, </h2>
          <p>This is what we got you for today</p>
        </div>
        <div className="types">
          {types.map((i, ind) => (
            <div className="type" key={ind}>
              <div className="type-icon">
                <GrArticle />
              </div>
              <div className="type-text">
                <h3>Articles</h3>
                <p>4,950 New Updates</p>
              </div>
            </div>
          ))}
        </div>
        <div className="articles">
          {articles.map((i, ind) => (
            <div className="article" key={ind}>
              <img
                src="https://s3-alpha-sig.figma.com/img/4ff6/844d/4f86ff4a77123ece7ddd1fe82c2c13f8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkRnFSNVezIXPvjSezw4mBGCXxuLcO4KQEE1XYSCtL11RdgXwlHZtJ4nYDbHMA90akexx8ZiBsBi~J6idQr0C2rsJGS3qpF33uWPfTWRDi-NDsB3H1G6Qr-2q3uc44FQxwqM9tPtNcx4DZapKcYcn8Pc1M8o0BqAZjSDbosG15XhcPyGTVXjlKLic-EV~KVTiE0~m3zuVfjM1nx7PIKGaCdEr7K2WgSI60iIAJWkFZmxS5QcKX4k9ZLR2H9CZhI954LDXClthjLmAbNspxw6tkSmf0g144hut0FrNRV735TOeUSNJu-t3z5aGWCMX7Cvd6p5CexTn74ySRGIz3sqUA__"
                alt="article"
                style={{
                  width: "435px",
                  height: "228px",
                  borderRadius: "15px",
                }}
              />
              <div className="article-content">
                <div className="article-content-first">
                  <h4>BUSINESS</h4>
                  <p>20 Sep 2022</p>
                  <div className="user">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/24ec/e0a1/20b72a899f9634f3484eed956498fb5c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QL8JYadn52N0OggbqjYVXXosbJXKfDEBUp00~1a4OLsK7muAvRDs3JAyalAVWxvoKpD5eU3nQW4F45J-WM~zqctg5tTm9qreIh1r--MvYY~61AF0b~Ulr6CCQ4fhm1mHG7UPq31Skb2WjN8Na~MB5HUqTKeW-kcKipg9isqdtonRGPjIR3xbyzES-YlNv5POs-jE1kWDSy4W0iEmpBcUhieReBifd1SjjuiVgmouivc09zyti9gtFtW-NQWbtl41J4d96p34wsmkvyDgPWs9ZkOrio3SVwCQ-S7ySYsVWD3UykMGo0Cp-uTsA~rfjR~Bg3SpMdXcHM1T13GyI4N5IQ__"
                      alt="user"
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "15px",
                        margin: "5px",
                      }}
                    />
                    <p>Maria Doe </p>
                  </div>
                </div>
                <div className="article-content-second">
                  <h5>7 Rules of Effective Branding</h5>
                  <p>Created</p>
                </div>
                <div className="article-content-third">
                  <p>Why Branding matters for your Business</p>
                </div>
                <div className="article-content-fourth">
                  <p>Branding</p>
                  <p>Communication</p>
                  <p>Branding</p>
                </div>
                <div className="article-content-fifth">
                  <p> View </p>
                  <BsThreeDots />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="stories"></div>
        <div className="advertisment"></div>
      </div>
    </div>
  );
};

export default Dashboard;
