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
import { IoMdEye } from "react-icons/io";

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
  },
];

const array = [1, 2, 3, 4];

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
        <div className="types-heading">
          <h2>Top Articles</h2>
          <p>See all</p>
        </div>
        <div className="articles">
          {articles.map((i, ind) => (
            <div className="article" key={ind}>
              <img
                src={i.img}
                alt="article"
                style={{
                  width: "435px",
                  height: "228px",
                  borderRadius: "15px",
                }}
              />
              <div className="article-content">
                <div className="article-content-first">
                  <h4>{i.first.heading}</h4>
                  <p>{i.first.text}</p>
                  <div className="user">
                    <img
                      src={i.first.userImg}
                      alt="user"
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "15px",
                        margin: "5px",
                      }}
                    />
                    <p>{i.first.userName} </p>
                  </div>
                </div>
                <div className="article-content-second">
                  <h5>{i.second.heading}</h5>
                  <p>{i.second.text}</p>
                </div>
                <div className="article-content-third">
                  <p>Why Branding matters for your Business</p>
                </div>
                <div className="article-content-fourth">
                  {i.fourth.map((item,ind) => (
                    <p key={ind*4}>{item}</p>
                  ))}
                </div>
                <div className="article-content-fifth">
                  <p> View </p>
                  <BsThreeDots />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="types-heading">
          <h2>Top Stories</h2>
          <p>See all</p>
        </div>
        <div className="stories">
          {array.map((i,ind) => (
            <div className="story" key={ind*100}>
              <img src="https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1MYJeatG66NDI-1tvg9e8PHf~etrR-ZNzrDT0QymvzSArV161hJtHsc0qWG2~Arnp~4BhQxNc90VWgaLZYEM2c-fmxCLF4e3V7xVjrLlPNGdtHyoceOqepNCY3pdX5pArgw2zO~PQcUe5ZvxXTiYD5Oq-ZunycV9RsD2iYHyjV9Qipp~qxgm4qUcrL9sFLt7HcafNd1LkT2V4hhN0Kh50uPayQHf277SegRIkH6Sr4V7m2Tv6ZYn7aeLOaNhIJz2vJmxP14NMNnj08b43sT~mYGWPHOazqOUWk7xcJSn-OUHTpTlAPZa-xrm7DrUsktaYgJ~Ccr2l-GlRq9xvirDQ__" />

              <div className="story-content">
                <div className="top">
                  <div>
                    <IoMdEye />
                    <p> 428</p>
                  </div>
                  <p>
                    <MdAnalytics />
                  </p>
                </div>

                <div className="bottom">
                  <div className="first">
                    <p>How 7 lines code turned into $36 Billion Empire</p>
                    <div className="first-details">
                      <h4>BUSINESS.</h4>
                      <p>22 Sep 2022</p>
                      <div className="published">
                        <p>Published</p>
                      </div>
                    </div>
                    <div className="first-view ">
                      <p> View </p>
                      <div>
                        <BsThreeDots />
                      </div>
                    </div>
                  </div>
                  <div className="second"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="types-heading">
          <h2>Advertisment</h2>
          <p>See all</p>
        </div>
        <div className="advertisment"></div>
      </div>
    </div>
  );
};

export default Dashboard;
