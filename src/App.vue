<script setup lang="ts">
import CoverPage from './components/CoverPage.vue'
import NavigationPage from './components/NavigationPage.vue'
</script>

<template>
  <CoverPage name="Paul Rusch" job="SOFTWARE ENGENIEER"/>
  <NavigationPage />

  <section id="about">
    <h2>About Me</h2>
    <p>Lorem ipsum...</p>
  </section>

  <section id="services">
    <h2>My Services</h2>
    <div>
      <h3>Web Development</h3>
      <p>Lorem ipsum...</p>
    </div>
    <div>
      <h3>Web Design</h3>
      <p>Lorem ipsum...</p>
    </div>
    <div>
      <h3>Web Consulting</h3>
      <p>Lorem ipsum...</p>
    </div>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>CSS</li>
      <li>HTML</li>
      <li>JavaScript</li>
      <!-- Add more skills here -->
    </ul>
  </section>

  <section id="facts">
    <h2>Facts</h2>
    <ul>
      <li>Coffees per day: 6</li>
      <li>Launched websites: 64</li>
      <!-- Add more facts here -->
    </ul>
  </section>

  <section id="experience">
    <h2>Experience</h2>
    <div>
      <h3>2018 - now: Freelance Full Stack Web Developer</h3>
    </div>
    <!-- Add more experiences here -->
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <!-- Project items here -->
  </section>

  <section id="testimonials">
    <h2>Testimonials</h2>
    <!-- Testimonial items here -->
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <!-- Contact details -->
  </section>

</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
