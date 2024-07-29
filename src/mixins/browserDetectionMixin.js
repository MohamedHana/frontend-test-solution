export default {
  data() {
    return {
      userAgent: navigator.userAgent,
    };
  },
  computed: {
    oldBrowsersClass() {
      return this.isIE10() || this.isSafari8() ? "old-browsers-class" : "";
    },
    browserClass() {
      if (this.isIE10()) {
        return "ie10-class";
      } else if (this.isSafari8()) {
        return "safari8-class";
      }
      return "";
    },
  },
  methods: {
    isIE10() {
      return this.userAgent.indexOf("MSIE 10.0") > -1;
    },
    isSafari8() {
      return (
        this.userAgent.indexOf("Safari") > -1 &&
        this.userAgent.indexOf("Version/8") > -1 &&
        this.userAgent.indexOf("Chrome") === -1
      );
    },
  },
};
