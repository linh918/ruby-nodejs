require 'schmooze'

# class BabelSchmoozer < Schmooze::Base
# dependencies babel: 'babel-core'

# method :transform, 'babel.transform'
# method :version, 'function() { return [process.version, babel.version]; }'
# end

class LocalScriptSchmoozer < Schmooze::Base
dependencies localapp: './localapp'

method :test, 'localapp.test'
end

schmoozer = LocalScriptSchmoozer.new(File.join(__dir__, 'fixtures', 'local_script'))
pk = '7d128a6d096f0c14c3a25a2b0c41cf79661bfcb4a8cc95aaaea28bde4d732344'
hex ="800001f0214920616d2073656e64696e672031204e454f20746f20736f6d654164647265737301ab0000029b7cffdaa674beae0f930ebe6085af9093e5fe56b34a5c220ccdcf6efc336fc500e1f505000000009847e26135152874355e324afd5cc99f002acb339b7cffdaa674beae0f930ebe6085af9093e5fe56b34a5c220ccdcf6efc336fc500e9a435000000003775292229eccdf904f16fff8e83e7cffdc0f0ce"
msgHash = "be714574dd89907a5c1cb6294738ddf002de7e761aa33ff8e13888a8703ee2d0"
puts schmoozer.test(pk, msgHash)
