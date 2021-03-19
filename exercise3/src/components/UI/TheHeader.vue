<template>
  <div class="container">
    <header class="header">
      <img src="../../assets/konnect.svg" alt="konnect logo" class="logo" />

      <nav class="user-nav">
        <div class="user-nav__icon-box">
          <svg class="user-nav__icon">
            <use xlink:href="../../assets/sprite.svg#icon-notification" />
          </svg>
        </div>
        <div class="user-nav__icon-box">
          <svg class="user-nav__icon">
            <use xlink:href="../../assets/sprite.svg#icon-question" />
          </svg>
        </div>
        <div class="user-nav__user">
          <img src="../../assets/user.jpeg" alt="User photo" class="user-nav__user-photo" />
        </div>
      </nav>
    </header>
  </div>
</template>



<style  lang="scss" scoped>
:root {
  --color-primary: #eb2f64;
  --color-primary-light: #ff3366;
  --color-primary-dark: #ba265d;

  --color-grey-light-1: #faf9f9;
  --color-grey-light-2: #f4f2f2;
  --color-grey-light-3: #f0eeee;
  --color-grey-light-4: #ccc;

  --color-grey-dark-1: #333;
  --color-grey-dark-2: #777;
  --color-grey-dark-3: #999;

  --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  --shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.06);

  --line: 1px solid var(--color-grey-light-2);
}

.container {
  // max-width: 120rem; REMOVING FOR BIG SCREENS
  background-color: var(--color-grey-light-1);
  box-shadow: var(--shadow-dark);
  //   min-height: 50rem;
}

/* .header {
  font-size: 1.4rem;
  height: 7rem;
  background-color: #fff;
  border-bottom: var(--line);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: $bp-smallest) {
    flex-wrap: wrap;
    align-content: space-around;
    height: 11rem;
  }
} */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.logo {
  margin-left: 3rem;
  height: 1.25rem;
}

.user-nav {
  align-self: stretch;

  display: flex;
  align-items: center;

  & > * {
    padding: 0 1rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }

  & > *:hover {
    background-color: var(--color-grey-light-2);
  }

  &__icon-box {
    position: relative;
  }

  &__icon {
    height: 1.25rem;
    width: 1.25rem;
    fill: #a3b6d9;
  }

  &__notification {
    font-size: 0.8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: #fff;
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__user-photo {
    height: 2.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
}
</style>