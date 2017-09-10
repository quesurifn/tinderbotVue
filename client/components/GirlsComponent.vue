<template>
    <div class='master'>
        <div class="girls-wrapper" >
            <div class='girls-card' v-if='currentIndex !== length' >
                <h1>{{ women[currentIndex].name }}</h1>
                <img :src="women[currentIndex].photos[0].url" alt='woman' />
                <div class='like'>
                    <button @click="setStatus('like')"><i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
                    <button @click="setStatus('dislike')"><i class="fa fa-thumbs-down" aria-hidden="true"></i></button>
                </div>
            </div>
            <div class='nomore' v-else>
                <h1>You're out of matches!</h1>

                <button @click='getMatches("refresh")'><i class="fa fa-refresh" aria-hidden="true"></i></button>

            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios' 


export default {
  data() {
       return {
            women: {},
            currentIndex: 0,
            length:0
       } 
  },
  created() {
    this.getMatches()
  },
  methods: {
    getMatches(r) {
        if (r === 'refresh') {
            this.currentIndex = 0
            this.length = 0
        }

        axios.get('http://localhost:5000/matches')
        .then(r => {
            console.log(r)
            this.women = r.data.results
            this.length = this.women.length
        }) 
        .catch(e => {
            console.error(e)
        })
    },

    setStatus(status) {
        let currentIndex = this.women[this.currentIndex]
        let url = currentIndex.photos[0].url
        let id = currentIndex._id
       
        axios.post('http://localhost:5000/setstatus', {
            'url': url,
            'id': id,
            'status': status
        })
        .then(r => {
            console.log(r)
        })
        .catch(e => {
            console.error(e)
        })

        this.currentIndex++
    }


    


  } 
}
</script>


<style>
.girls-wrapper{ 
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center;
    margin-top: 100px;
    height:100%;
}
.girls-card {
    width: 300px;
    height: 400px;
    margin:20px;
}
.girls-card img {
    height: 200px;
    width: 200px;
    border-radius:50%;
    display:block; 
    margin:auto;
}
.girls-card h1 {
    color: #363636;
    font-size: 22px;
    text-align:center;
}
.master {
    background: url('../images/tinderbg.png');
    background-size: cover;
    background-position: center;
    margin-top: -100px;
    height:100vh;
}
.master h1 {
    font-family: 'lobster', cursive;
    margin-top:40px;
    color:#363636;
}
.girls-card button, .nomore button {
    margin: 40px 10px;
    display:block;
    height: 50px;
    width:50px;
    font-size: 18px;
    color:white;
    background: #363636;
    border: none;
    text-transform: uppercase;
    border-radius: 6px;
}
.nomore button {
    margin: auto;
}
button i {
    color:white;
}
button:hover {
    opacity: 0.7;
}
.like {
    display:flex; 
    justify-content: center;
    align-items:center;
}
.button:active {
    outline:none;
}
</style>