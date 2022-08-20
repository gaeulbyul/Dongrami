if (document.getElementById('react-root')) {
  const script = document.createElement('script')
  script.onload = () => void script.remove()
  script.src = chrome.runtime.getURL('dongrami.js')
  document.head.appendChild(script)
}
