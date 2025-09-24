<template>
    <div id="nav">
        <router-link to="/" id="logo-container">
            <img src="/img/partytimelogo.png" alt="Party time">
        </router-link>
        <h2 id="nav-title">
            Party Time
        </h2>
        <div id="nav-links"></div>
        <router-link to="/">Home</router-link>
        <router-link to="/login" v-show="!authenticated">entrar</router-link>
        <router-link to="/register" v-show="!authenticated">cadrastrar</router-link>
        <router-link to="/dashboard" v-show="authenticated">DashBoard</router-link>
        <router-link to="/profile" v-show="authenticated">profile</router-link>

        <button @click="logout($event)" v-show="authenticated">logout</button>

    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name:"NavBar", 
        methods:{
            logout(e){
                e.preventDefault()
                this.$store.commit("logout")
                // redirecionar
                this.$router.push("/")



            }
        },
        computed:{
            ...mapState(["authenticated"])
        }
    }

</script> 

<style  scoped>
    #nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1 solid #eee ;

    }
    #nav a {
        text-decoration: none;
        margin-right: 15px;
    }
    #nav img {
        width:  35px;
    }
    #nav-title{
        font-size: 3rem;
        font-weight: 300;

    }
    #logo-container, #nav-links{
        display: flex;
        justify-content: flex-end;
    }
    button{
        background-color:#fff ;
        border:none;
        font-size: 16px;
        cursor: pointer;
    }
    button:hover{
        color: #c1b696;

    }


</style>