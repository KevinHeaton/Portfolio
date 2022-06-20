import React from "react";
import 'bootstrap'

function Projects() {


  return (
    <section id="projects">
    <h1>My Projects</h1>
    <div class="who-do">
        <a href="https://safe-scrubland-88358.herokuapp.com/" target="_blank" rel="noreferrer"><img src="./images/projects/Who-Do.png" alt="" /></a>
    </div>
    <div class="superwiki">
        <a href="https://kevinheaton.github.io/Super-Hero-Wiki/" target="_blank" rel="noreferrer"><img src="./images/projects/SuperWiki.png" alt="" /></a>
    </div>
    <div class="run-buddy">
        <a href="https://kevinheaton.github.io/run-buddy/" target="_blank" rel="noreferrer"><img src="./images/projects/run_buddy.png" alt="Run Buddy homepage" /></a>
    </div>
    <div class="example row">
        <a class="col-lg-5" href="https://kevinheaton.github.io/Workday-Scheduler/" target="_blank" rel="noreferrer"><img src="./images/projects/Workday-Scheduler.png" alt="" /></a>
    
        <a class="col-lg-5" href="https://kevinheaton.github.io/taskinator/" target="_blank" rel="noreferrer"><img src="./images/projects/Taskinator.png" alt="" /></a>

        <a class="col-lg-5" href="https://kevinheaton.github.io/taskmaster-pro/" target="_blank" rel="noreferrer"><img src="./images/projects/Taskmaster-pro.png" alt="" /></a>

        <a class="col-lg-5" href="https://kevinheaton.github.io/robot-gladiators/" target="_blank" rel="noreferrer"><img src="./images/projects/Robot-Gladiators.png" alt="" /></a>
     </div>
</section>
  )
}

export default Projects;