<template>
    <div class='master'>
        <div class='container'> 
            <div class='dash'>
                <div class='dashcard'> 
                    <h2>Promiscuous Mode</h2>
                    <div class="onoffswitch">
                        <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" v-on:change='everyone'>
                        <label class="onoffswitch-label" for="myonoffswitch"></label>
                    </div>
                    <p>Promiscuous swipes right on everyone to play the numbers game</p>
                </div>
                <div class='dashcard'> 
                    <h2>Zuck Mode</h2>
                    <div class="onoffswitch">
                        <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch">
                        <label class="onoffswitch-label" for="myonoffswitch"></label>
                    </div>
                    <p>Bill Gates uses facial recognition and deep learning to automatically swipe right on attrative people</p>
                </div>
            </div>
            <div class='apply'>

            </div> 
        </div>
    </div>

</template>
<script>
export default {
  data() {
       return {
           sloppy: false
       }
  },
  methods: {
      everyone() {
        let x
        if (document.getElementById('myonoffswitch').checked === true) {
            x = true
        } else {
            x = false
        }

        this.$store.commit('EVERYONE', {
            value: x
        })
      }
  }
}


</script>

<style> 
    .master {
        margin-top: 0 !important;
        height: 100vh;
    } 
    .container {
        max-width: 800px;
    }
    .apply {

    }
    .dashcard {
        margin : 40px;
        height: 400px;
    }
    .dashcard p{
        font-family: 'raleway', sans-serif; 
        font-size: 16px;
        color: #363636;
        margin: 40px auto;
        max-width: 250px;
    }
    .dash {
        display:flex; 
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;
    }
    h2 {
        font-family: 'lobster', cursive;
        font-size: 34px;
        color: #363636;
    }
    .onoffswitch {
        position: relative; width: 100px;
        -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
        margin: 40px 0;
    }
    .onoffswitch-checkbox {
        display: none;
    }
    .onoffswitch-label {
        display: block; overflow: hidden; cursor: pointer;
        height: 30px; padding: 0; line-height: 30px;
        border: 0px solid #999999; border-radius: 16px;
        background-color: #EEEEEE;
    }
    .onoffswitch-label:before {
        content: "";
        display: block; width: 16px; margin: 7px;
        background: #A1A1A1;
        position: absolute; top: 0; bottom: 0;
        right: 56px;
        border-radius: 16px;
        box-shadow: 0 6px 12px 0px #757575;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label {
        background-color: #665965;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label, .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    border-color: #665965;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
        margin-left: 0;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label:before {
        right: 0px; 
        background-color: #34360D; 
        box-shadow: 3px 6px 18px 0px rgba(0, 0, 0, 0.2);
    }

</style>

