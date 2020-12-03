<template>
  <div id="app">
    <div id="nav">
      <!-- would be better to have sub-routers,
      have list links in main,
      then create/edit as children -->
      <router-link to="/">To Do</router-link> |
      <router-link to="/create-item">Create Item</router-link> |
      <router-link to="/categories">Categories</router-link> |
      <router-link to="/create-category">Create Category</router-link> |
    </div>
    <router-view/>
  </div>
</template>
