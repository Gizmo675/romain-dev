import React, { useContext } from 'react'

// Style
import './competences.scss'

// Context
import ThemeContext from '../../Context/ThemeContext'
import SvgCss3 from '../IconComponent/Css3'
import SvgGit from '../IconComponent/Git'
import SvgJavascript from '../IconComponent/Javascript'
import SvgLinux from '../IconComponent/Linux'
import SvgMongodb from '../IconComponent/Mongodb'
import SvgNodeDotJs from '../IconComponent/NodeDotJs'
import SvgReact from '../IconComponent/React'
import SvgPhotoshop from '../IconComponent/Photoshop'

// Image

function Competences() {

  const {darkTheme} = useContext(ThemeContext)

  return(
    <div 
    id="Competences"
    className={
      darkTheme ?
      'darkTheme' :
      ''}
    >
      <div className='contents'>
        <h1 className='titre'>
          Compétences
        </h1>
        <hr />
        <p>    
          Au cours de mon cursus de formation j'ai pu apprendre différentes compétences que j'ai mis à profit dans divers langage de programmation et divers projets.
          J'ai une préfèrence toute particulière pour le front-end et de fait pour le Javascript. 
        </p>
        <p>
          J'adore combiner la technique, la logique et le design. Le développement web me permet de laisser libre cours à ma créativité.
          J'ai eu la chance d'avoir plusieurs vies professionnelles. Comptable en expertise comptable et directeur de course sur un circuit automobile. 
        </p>
        <p>
          J'ai desormais la chance de pouvoir allier ma passion et mon métier.
        </p>
        <hr />
        <div id='softskills' className="skills-list">
          <p>Quelques particularités de ma personnalité, je suis a la fois :</p>
          <ul>
            <li>
              Organisé
            </li>
            <li>
              Rigoureux
            </li>
            <li>
              Curieux
            </li>
            <li>
              A l'écoute
            </li>
          </ul>
        </div>
        <div className='competences-list'>
          <div className='competences-icon'>
              <SvgCss3 />
              <SvgGit />
              <SvgJavascript />
              <SvgLinux />
              <SvgMongodb />
              <SvgNodeDotJs />
              <SvgReact />
              <SvgPhotoshop />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competences;