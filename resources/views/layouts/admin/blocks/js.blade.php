<script src="{{ asset('argon') }}/vendor/jquery/dist/jquery.min.js"></script>
<script src="{{ asset('argon') }}/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>
<script src="{{ asset('argon') }}/js/argon.js?v=1.0.0"></script>

@stack('js-before')

<!-- Argon JS -->

<!-- Plugins -->
<script src="{{ mix('js/plugins.all.js') }}"></script>

@stack('js-after')