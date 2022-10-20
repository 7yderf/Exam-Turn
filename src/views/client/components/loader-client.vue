<template>
      <div class="loader-container" v-if="showLoader">
        <svg height="100" width="100">
          <circle
            stroke-linecap="round"
            transform-origin="50 50"
            cx="50"
            cy="50"
            r="40"
            stroke-width="5"
            stroke="white"
            fill="none"
            stroke-dasharray="125.66"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              to="360"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            stroke-linecap="round"
            transform-origin="50 50"
            cx="50"
            cy="50"
            r="30"
            stroke-width="5"
            stroke="white"
            fill="none"
            stroke-dasharray="94.245"
          >
           <animateTransform
              attributeName="transform"
              type="rotate"
              dur="0.8s"
              to="360"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
</template>

<script>
export default {
    name: 'Loader',
    props: {
        showLoader: Boolean
    },
    setup(props){
        return {}
    }
}
</script>

<style>
.loader-container
{
    width: 100%;
    height: 100%;
    background-color: #02000099;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:1;
}
</style>