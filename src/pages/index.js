import * as React from "react";
import "../css/custom.css";
import StickyBanner from "../components/StickyBanner";
import "@fontsource/ibm-plex-sans";

// markup
const IndexPage = () => {
  return (
    <div>
      <h1>Coinsquare Take&nbsp;Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        porttitor, magna a auctor facilisis, turpis augue ornare sem, a viverra
        diam sapien id enim. Duis finibus, metus sed euismod consequat, ipsum
        lacus ullamcorper diam, in fermentum libero ex eu lectus. Nullam viverra
        dui eget convallis gravida. Pellentesque vehicula, magna et pretium
        pulvinar, massa dui convallis nibh, at eleifend quam ligula in nulla. Ut
        hendrerit semper placerat. Quisque efficitur tellus at leo accumsan,
        quis cursus urna porttitor. Etiam id enim a tellus pellentesque aliquam
        ut sed leo. Etiam tempor diam vitae est ornare, eget aliquam metus
        commodo.
      </p>
      {" "}

      <p>
        In finibus commodo justo vel posuere. Aliquam et semper sem. Duis semper
        tellus ac odio laoreet convallis. Aenean vestibulum convallis ligula at
        mattis. Maecenas tristique ac magna ut porttitor. Maecenas hendrerit
        eleifend orci. In ac ante mauris. Vestibulum dapibus egestas blandit.
        Etiam feugiat ultrices congue. Morbi sit amet orci nibh. Praesent a
        mauris tempus, finibus mauris vitae, placerat diam. Morbi malesuada enim
        ac purus laoreet, a viverra ipsum porttitor. Sed imperdiet lobortis
        ullamcorper. Ut feugiat, justo ut mattis luctus, nibh lectus auctor
        ante, ut viverra turpis lectus at ipsum. Praesent id ligula iaculis
        massa porta rutrum non et ipsum. Morbi cursus turpis vitae lorem
        ultricies, quis tincidunt quam vehicula. Donec mi nunc, feugiat in
        suscipit a, gravida ultricies lacus. Integer pellentesque sagittis leo
        non lobortis. Aliquam id justo felis. Etiam fringilla felis sit amet
        pellentesque aliquam. Phasellus rutrum congue tortor, viverra
        pellentesque nunc porttitor et. Sed eu turpis non urna cursus hendrerit.
        Mauris non nisi ac turpis sollicitudin facilisis. Aliquam eget tellus id
        sem mattis eleifend. Donec ullamcorper mauris quis diam varius, ut
        blandit nibh lobortis. Etiam ut mauris sapien.
      </p>{" "}

      <p>
        Integer rhoncus varius diam vitae gravida. Nullam lobortis malesuada
        libero at dapibus. Nunc ultricies porta lorem et iaculis. Sed accumsan,
        tortor nec efficitur congue, dolor ligula accumsan quam, vel convallis
        mauris elit eu metus. Sed rutrum metus vel leo aliquet, vitae porttitor
        ante sollicitudin. Aenean ipsum nisl, ullamcorper eu tincidunt quis,
        maximus sed mi. Nam pharetra maximus augue, eget porta augue tincidunt
        vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Fusce blandit eros id aliquam pretium.
        Pellentesque eros erat, dictum nec libero ac, dictum scelerisque diam.
        Morbi pharetra ut nulla non iaculis. Vivamus tincidunt auctor
        consectetur. Aenean ligula nunc, vehicula non pellentesque sed,
        fermentum vel ipsum. Curabitur vitae lectus ipsum. Sed sit amet pharetra
        tellus. Fusce vel est sed mi posuere dictum. Cras pharetra in metus in
        hendrerit. Nunc nec dolor faucibus, convallis ante vel, porttitor ipsum.
        Vivamus est nisl, malesuada eget sem id, malesuada tristique purus. Ut
        lacinia diam et massa consequat laoreet. Donec facilisis quis justo ac
        suscipit. Praesent condimentum sapien vitae libero commodo, a dictum
        libero ornare. Sed maximus interdum cursus. 
      </p>
      <StickyBanner />
    </div>
  );
};

export default IndexPage;
