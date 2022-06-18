<script lang="ts">
  import "carbon-components-svelte/css/white.css";
  import {
    Column,
    Content,
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    Row,
    SideNav,
    SideNavDivider,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem,
    SkipToContent,
  } from "carbon-components-svelte";

  import { links, Router, Route, navigate } from "svelte-routing";
  import About from "./lib/pages/About.svelte";
  import NotFound from "./lib/pages/NotFound.svelte";
  import Home from "./lib/pages/Home.svelte";

  let isSideNavOpen = false;

  const nav = (url) => () => {
    navigate(url);
  };
</script>

<main>
  <Router>
    <Header
      company="World Order Bank"
      platformName="Online Banking"
      bind:isSideNavOpen
      persistentHamburgerMenu={true}
    >
      <svelte:fragment slot="skip-to-content">
        <SkipToContent />
      </svelte:fragment>
      <HeaderNav>
        <HeaderNavItem text="Home" on:click={nav("/")} />
        <HeaderNavItem text="About" on:click={nav("/about")} />
        <HeaderNavMenu text="Menu">
          <HeaderNavItem href="#/" text="Link 1" />
          <HeaderNavItem href="#/" text="Link 2" />
          <HeaderNavItem href="#/" text="Link 3" />
        </HeaderNavMenu>
      </HeaderNav>
    </Header>

    <SideNav bind:isOpen={isSideNavOpen}>
      <SideNavItems>
        <SideNavLink text="Link 1" />
        <SideNavLink text="Link 2" />
        <SideNavLink text="Link 3" />
        <SideNavMenu text="Menu">
          <SideNavMenuItem href="/" text="Link 1" />
          <SideNavMenuItem href="/" text="Link 2" />
          <SideNavMenuItem href="/" text="Link 3" />
        </SideNavMenu>
        <SideNavDivider />
        <SideNavLink text="Link 4" />
      </SideNavItems>
    </SideNav>

    <Content>
      <Route path="/"><Home /></Route>
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />

      <footer>
        <Row>
          <Column>
            <small>
              &copy; {new Date().getFullYear()} World Order Bank, Inc. All Rights
              Reserved. Not all services offered in all countries. 
            </small>
          </Column>
          <Column />
        </Row>
      </footer>
    </Content>
  </Router>
</main>

