import "./qr-code-component.css";
import image from "/home/bargu/code/css-practice/images/illustration-article.svg";
import avatarImage from "/home/bargu/code/css-practice/images/image-avatar.webp";
export function PreviewCard() {
  return (
    <main>
      <section>
        {/* card component */}
        <div>
          <img src={image} alt="artical-image" />
          {/* tags */}
          <div>Leaning</div>
          {/* date */}
          <p>Published 24 Dec 2023</p>
          <h2>HTML & CSS foundations</h2>
          <p>
            These languages are backgbon of every website, definning structure,
            content, and presetation.
          </p>
          <div>
            {/* image */}
            <img className="h- 8 w-8" alt="user-image" src={avatarImage} />
            <p>Greg Hooper</p>
          </div>
        </div>
        <div />
      </section>
    </main>
  );
}

export default PreviewCard;
