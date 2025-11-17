<script lang="ts">
  
</script>

<div class="m3-textfield-container">
  <input type="text" id="my-input" class="m3-textfield-input" placeholder=" " required />
  <label for="my-input" class="m3-textfield-label">Your Label Text</label>
<!--  <div class="m3-textfield-outline">-->
<!--  </div>-->
</div>

<style>
    /* Basic Container Setup - (Same as before) */
    .m3-textfield-container {
        position: relative;
        width: 300px;
        margin-bottom: 24px;
    }

    /* Input Base Style - (Mostly the same) */
    .m3-textfield-input {
        width: 100%;
        padding: 16px 12px;
        font-size: 16px;
        line-height: 24px;
        background-color: transparent;
        border: 1px solid #F9747E; /* Neutral border color */
        border-radius: 4px;
        outline: none;
        transition: border-color 0.2s, padding 0.2s;
        opacity: 0; /* Hide default placeholder */
    }

    /* Label Base Style - (The initial color and positioning) */
    .m3-textfield-label {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #49454F; /* Inactive color */
        pointer-events: none;
        transition: transform 0.2s, font-size 0.2s, color 0.2s, background-color 0.2s, padding 0.2s;
        z-index: 2; /* Crucial: Ensures label is on top */
        font-size: 16px;
        /* Reset background and padding for non-floating state */
        background-color: transparent;
        padding: 0;
    }

    /* 🚀 Floating Label State (The "Cut-Out" Effect) */
    .m3-textfield-input:focus + .m3-textfield-label,
    .m3-textfield-input:not(:placeholder-shown) + .m3-textfield-label {
        /* 1. Move it up to sit on the border */
        transform: translate(-4px, -30px);

        /* 2. Shrink it */
        font-size: 12px;

        /* 3. Add padding to create a gap for the text */
        padding: 0 4px;

        /* 4. **THE KEY:** Give it a background color matching the page */
        background-color: white;

        /* 5. Change color to Primary */
        color: #6750A4;
    }

    /* Focused State: Input Border - (Primary color border, slightly thicker) */
    .m3-textfield-input:focus {
        border: 2px solid #675004;
        padding: 15px 11px; /* Adjust padding for 2px border (16-1=15, 12-1=11) */
        opacity: 1;
    }

    /* Filled State: Input Border (when content exists but is not focused) */
    .m3-textfield-input:not(:placeholder-shown) {
        border-color: #79747E;
        opacity: 1;
    }
  
</style>