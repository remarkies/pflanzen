<template>
  <nav>
    <div class="container-lg">
      <div class="navigation--content">
        <ul>
          <li>
            <router-link :to="{name: 'comparison'}">
              Vergleich
            </router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link :to="{name: 'andre'}">
              André
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'luka'}">
              Luka
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'fabien'}">
              Fabien
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
nav{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  background:white;
  border-bottom: 2px solid var(--color-gray-light);
  z-index: 100;

  .navigation--content{
    display:flex;
    justify-content: space-between;
    width:100%;
  }

  ul{
    padding:0;
    margin:0 -20px;
    list-style-type: none;
    display: flex;

    li{
      a{
        display: block;
        padding: 20px;
        text-decoration: none;
        color: var(--color-text);
        transition: all .4s ease;

        &:hover, &:focus{
          color: var(--color-text-light);
        }

        &.router-link-exact-active{
          font-weight:600;
        }
      }
    }
  }
}
</style>
