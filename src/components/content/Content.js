import classes from "./Content.module.css";
const Content = () => {
  return (
    <div class={`card  ${classes.content}`}>
      <div class="card-header">
        <i class="fa fa-clock-o" style={{ fontSize: "1.2rem" }}></i>
        <span>&nbsp;&nbsp;15 Minutes</span>
      </div>
      <div class="card-body">
        <h2 class={`card-title test-light`}>
          The Big Five: Your Gateway to Greater Discoveries!
        </h2>
        <p class={`card-text test-light `}>
          Before we embark on this thrilling journey to uncover your unique
          career path, we need to get to know you a little better. And what
          better way than through the 'Big Five Personality Assessment'? The Big
          Five is a well-respected psychological model that helps us understand
          your unique personality traits. No, we're not mind-readers (though
          that would be cool), we simply use science to help you discover the
          best career paths suited to your personality. This isn't a test, so
          there are no right or wrong answers. Just be honest, because the more
          truthful you are, the more accurate your career matches will be. And
          don't worry, we value your privacy and your responses will be kept
          confidential. This introspective journey will take about 15 minutes of
          your time. So, grab a snack, settle into your favorite chair, and get
          ready to dive deep into the fascinating world of you!
        </p>
        <div class={`d-grid `}>
          <button class={`btn btn-primary col-6 `} type="button">
            <h5>Enter</h5>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Content;
