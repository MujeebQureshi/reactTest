var SnippetLogin = function() {
    var a = function() {
		$("#m_login").removeClass("m-login--forget-password").removeClass("m-login--signin").addClass("m-login--signup");
		$(".m-login__signup").animateClass("flipInX animated");
	},
	t = function() {
		$("#m_login").removeClass("m-login--forget-password").removeClass("m-login--signup").addClass("m-login--signin");
		$(".m-login__signin").animateClass("flipInX animated")
	},
	r = function() {
		$("#m_login").removeClass("m-login--signin").removeClass("m-login--signup").addClass("m-login--forget-password");
		$(".m-login__forget-password").animateClass("flipInX animated");
	},
	n = function() {
		$("#m_login_forget_password").click(function(e) {
			e.preventDefault(), r()
		}), $("#m_login_forget_password_cancel").click(function(e) {
			e.preventDefault(), t()
		}), $("#m_login_signup").click(function(e) {
			e.preventDefault(), a()
		}), $("#m_login_signup_cancel").click(function(e) {
			e.preventDefault(), t()
		})
	};
    return {
        init: function() {
            n()
        }
    }
}();

jQuery(document).ready(function() {
	SnippetLogin.init()
});