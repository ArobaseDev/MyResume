//import ProgressBar from '@ramonak/react-progress-bar'
import MyProgressBar from './MyProgressBar';



export default function Skills() {
  return (
    <>
     <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                {/* <ProgressBar className="progress-bar"  completed={100}  /> */}
                <div className="progress-bar">
                  <MyProgressBar  value={100} aria-label='HTML' />
                </div>
              </div>
            </div>

            {/* <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar className="progress-bar"  completed="90" ariaValueMin={0}  ariaValueMax="100"/>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar className="progress-bar"  completed="75" ariaValueMin={0}  ariaValueMax="100"/>
              </div>
            </div> */}

          </div>

          {/* <div className="col-lg-6">

            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar className="progress-bar"  completed="80" ariaValueMin={0}  ariaValueMax="100"/>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar className="progress-bar"  completed="90" ariaValueMin={0}  ariaValueMax="100"/>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar className="progress-bar"  completed="55" ariaValueMin={0}  ariaValueMax="100"/>
              </div>
            </div>

          </div> */}

        </div>

      </div>
    </section>
    </>
  )
}