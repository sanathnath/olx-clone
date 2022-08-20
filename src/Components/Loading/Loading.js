import React from "react";
import "./loading.css";

function Loading() {
  return (
    <div class="d-flex position-absolute align-items-center w-100 h-100 justify-content-center"
  style={{backgroundColor:"rgba(255, 255, 255, 0.61)"}}>
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
  );
}

export default Loading;
