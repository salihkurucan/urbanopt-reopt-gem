(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{195:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("h3",{attrs:{id:"rdocs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdocs"}},[t._v("#")]),t._v(" "),s("StaticLink",{attrs:{target:"\\_blank",href:"rdoc/"}},[t._v("Rdocs")])],1),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("URBANopt REopt Gem")]),t._v(" extends a "),s("strong",[t._v("URBANopt::Scenario::DefaultReports::ScenarioReport")]),t._v(" and "),s("strong",[t._v("URBANopt::Scenario::DefaultReports::FeatureReport")]),t._v(" with the ability to derive cost-optimal distributed energy resource (DER) technology sizes and annual dispatch strageties via the "),s("StaticLink",{attrs:{target:"\\_blank",href:"https://reopt.nrel.gov/tool"}},[t._v("REopt Lite")]),t._v(" decision support platform.\nREopt Lite is a technoeconomic model which leverages mixed integer linear programming to identify the cost-optimal sizing of solar PV, Wind, Storage and/or diesel generation given an electric load profile, a utility rate tariff and other technoeconomic parameters. See "),s("StaticLink",{attrs:{target:"\\_blank",href:"https://developer.nrel.gov/docs/energy-optimization/reopt-v1/"}},[t._v("https://developer.nrel.gov/docs/energy-optimization/reopt-v1/")]),t._v(" for more detailed information on input parameters and default assumptions.")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Moreover, the REopt Gem can be run in several modes, either on:")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("See the "),s("StaticLink",{attrs:{target:"\\_blank",href:"https://github.com/TK-23/urbanopt-example-geojson-reopt-project.git"}},[t._v("example project")]),t._v(" for more infomation about usage of this gem.")],1),t._v(" "),s("p",[s("b",[t._v("Note:")]),t._v(" This module requires an API Key from the "),s("StaticLink",{attrs:{target:"blank",href:"https://developer.nrel.gov/"}},[t._v("NREL Developer Network")]),t._v(".")],1),t._v(" "),s("StaticLink",{attrs:{target:"\\_blank",href:"https://urbanopt.github.io/urbanopt-reopt-gem/"}},[t._v("RDoc Documentation")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://docs.urbanopt.net/installation/installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.urbanopt.net/installation/installation.html"),s("OutboundLink")],1),t._v(" for instructions on prerequiste software, including:")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Add this line to your application's Gemfile:")]),t._v(" "),t._m(6),s("p",[t._v("And then execute:")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("Or install it yourself as:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("This gem is used to call the REopt Lite API on a Scenario Report or Feature Report to update the object's Distributed Generation attributes (including system financial and sizing metrics) as shown in an example below:")]),t._v(" "),t._m(10),s("p",[t._v("Moreover, the following optimal dispatch fields are added to its timeseries CSV. Where no system component is recommended the dispatch will be all zero (i.e. if no solar PV is recommended ElectricityProduced:PV:Total will be always be zero)")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("The REopt Lite has default values for all non-required input parameters that are used unless the user specifies custom assumptions. See "),s("StaticLink",{attrs:{target:"\\_blank",href:"https://developer.nrel.gov/docs/energy-optimization/reopt-v1/"}},[t._v("https://developer.nrel.gov/docs/energy-optimization/reopt-v1/")]),t._v(" for more detailed information on input parameters and default assumptions.")],1),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("The code below shows how to run the REopt API on a single Feature Report hash using this gem:")]),t._v(" "),t._m(14),s("p",[t._v("More commonly, this gem can be used to run REopt a collection of features stored in a Scenario Report as show here:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("First, check out the repository (i.e. git clone this repo).")]),t._v(" "),s("p",[t._v("Next, obtain a developer.nrel.gov API key from the "),s("a",{attrs:{href:"https://developer.nrel.gov/%5D",target:"_blank",rel:"noopener noreferrer"}},[t._v("NREL Developer Network"),s("OutboundLink")],1),t._v(". Copy and paste your key in to the "),s("em",[t._v("developer_nrel_key")]),t._v("."),s("em",[t._v("rb")]),t._v(" file then save the file:")]),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("Finally, execute:")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"urbanopt-reopt-gem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#urbanopt-reopt-gem"}},[this._v("#")]),this._v(" URBANopt REopt Gem")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The REopt Gem accomplishes three basic functions (described more below in the "),e("em",[this._v("Functionality")]),this._v(" section):")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("Accepts a json (or hash) of "),s("strong",[t._v("assumptions")]),t._v(" (i.e. utility rate, installation costs, escalation rates) to use in running REopt for a Scenario or Feature Report")]),t._v(" "),s("li",[t._v("Updates the "),s("strong",[t._v("distributed_generation")]),t._v(" attributes of a Feature Report or Scenario Report based on a cost-optimal DER system")]),t._v(" "),s("li",[t._v("Updates the "),s("strong",[t._v("timeseries_CSV")]),t._v(" attributes of a Feature Report or Scenario Report based on the dispatch of a cost-optimal DER system")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("A Feature Report,")]),this._v(" "),e("li",[this._v("A collection of Feature Reports")]),this._v(" "),e("li",[this._v("All the features in a Scenario Report before aggregating results at the scenario level")]),this._v(" "),e("li",[this._v("The collection of features in aggregate as summarized in a Scenario Report")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Ruby 2.2.6")]),this._v(" "),e("li",[this._v("Bundler 1.17.0")]),this._v(" "),e("li",[this._v("OpenStudio 2.8.1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-ruby extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[this._v("gem "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'urbanopt-reopt'")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ bundle install\n$ bundle update\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ gem install 'urbanopt-reopt'\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"functionality"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functionality"}},[this._v("#")]),this._v(" Functionality")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('\t"distributed_generation": {\n\t      "lcc_us_dollars": 100000000.0,\n\t      "npv_us_dollars": 10000000.0,\n\t      "year_one_energy_cost_us_dollars": 7000000.0,\n\t      "year_one_demand_cost_us_dollars": 3000000.0,\n\t      "year_one_bill_us_dollars": 10000000.0,\n\t      "total_energy_cost_us_dollars": 70000000.0,\n\t      "solar_pv": {\n\t        "size_kw": 30000.0\n\t      },\n\t      "wind": {\n\t        "size_kw": 0.0\n\t      },\n\t      "generator": {\n\t        "size_kw": 0.0\n\t      },\n\t      "storage": {\n\t        "size_kw": 2000.0,\n\t        "size_kwh": 5000.0\n\t      }\n\t    }\n')])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("output")]),t._v(" "),s("th",[t._v("unit")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ElectricityProduced:Total")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("Electricity:Load:Total")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("Electricity:Grid:ToLoad")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("Electricity:Grid:ToBattery")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("Electricity:Storage:ToLoad")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("Electricity:Storage:ToGrid")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("Electricity:Storage:StateOfCharge")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:Generator:Total")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:Generator:ToBattery")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:Generator:ToLoad")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:Generator:ToGrid")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:PV:Total")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:PV:ToBattery")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:PV:ToLoad")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:PV:ToGrid")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:Wind:Total")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:Wind:ToBattery")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:Wind:ToLoad")]),t._v(" "),s("td",[t._v("kWh")])]),t._v(" "),s("tr",[s("td",[t._v("ElectricityProduced:Wind:ToGrid")]),t._v(" "),s("td",[t._v("kWh")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("Note:")]),this._v(" Required attributes for a REopt run include latitude and longitude, parsed from the Feature or Scenario Report attributes. If no utility rate is specified in your assumptions, then a constant rate of $0.13 is assumed without demand charges. Also, by default, only solar PV and storage are considered in the analysis (i.e. Wind and Generators are excluded from consideration).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'urbanopt/reopt'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEVELOPER_NREL_KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <insert a valid API key from https://developer.nrel.gov/signup >")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Load a Feature Report Hash")]),t._v("\nfeature_reports_hash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <insert a valid Feature Report hash here with latitude and longitude filled in>")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Create a Feature Report")]),t._v("\nfeature_report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URBANopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Scenario")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DefaultReports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FeatureReport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feature_reports_hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Specify a file name where REopt Lite results will be written in JSON format")]),t._v("\nreopt_output_file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feature_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("directory_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feature_report_reopt_run.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Specify a file name where the new timeseries CSV will be written after REopt Lite has determined cost optimal dispatch")]),t._v("\ntimeseries_output_file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feature_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("directory_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feature_report_timeseries.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Specify non-default REopt Lite assumptions, saved in JSON format, to be used in calling the API")]),t._v("\nreopt_assumptions_file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__FILE__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../files/reopt_assumptions_basic.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Create a REopt Lite Post Processor to call the API, note you will need a Developer.nrel.gov API key in this step")]),t._v("\nreopt_post_processor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URBANopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REoptPostProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEVELOPER_NREL_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Call REopt Lite with the post processor to update the feature's distributed generation attributes and timeseries CSV.")]),t._v("\nupdated_feature_report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reopt_post_processor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_feature_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feature_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reopt_assumptions_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reopt_output_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("timeseries_output_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'urbanopt/reopt'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEVELOPER_NREL_KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <insert a valid API key from https://developer.nrel.gov/signup >")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Create a Scenario Report")]),t._v("\nscenario_report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URBANopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Scenario")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DefaultReports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ScenarioReport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":directory_name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__FILE__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run/example_scenario'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":timeseries_csv")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__FILE__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run/example_scenario/timeseries.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Load Feature Reports into the Scenario Report     ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("each")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  feature_reports_path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__FILE__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"run/example_scenario/'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('/010_default_feature_reports/default_feature_reports.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  feature_reports_hash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("open"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feature_reports_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    feature_reports_hash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" symbolize_names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n  feature_report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URBANopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Scenario")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DefaultReports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FeatureReport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feature_reports_hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  feature_report_dir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__FILE__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"run/example_scenario/'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  feature_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("directory_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" feature_report_dir\n\n  scenario_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_feature_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feature_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Specify non-default REopt Lite assumptions, saved in JSON format, to be used in calling the API")]),t._v("\nreopt_assumptions_file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__FILE__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'files/reopt_assumptions_basic.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Create a REopt Lite Post Processor to call the API, note you will need a Developer.nrel.gov API key in this step")]),t._v("\nreopt_post_processor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URBANopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REoptPostProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scenario_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reopt_assumptions_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEVELOPER_NREL_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Call REopt Lite with the post processor once on the sceanrio's aggregated load to update the scenario's distributed generation attributes and timeseries CSV.")]),t._v("\nupdated_scenario_report "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reopt_post_processor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_scenario_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scenario_report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[this._v("#")]),this._v(" Testing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("DEVELOPER_NREL_KEY = '<insert your key here>'\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ bundle install\n$ bundle update    \n$ bundle exec rake\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"releasing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#releasing"}},[this._v("#")]),this._v(" Releasing")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Update change log")]),t._v(" "),s("li",[t._v("Update version in "),s("code",[t._v("/lib/urbanopt/reopt/version.rb")])]),t._v(" "),s("li",[t._v("Merge down to master")]),t._v(" "),s("li",[t._v("run "),s("code",[t._v("rake release")]),t._v(" from master")])])}],!1,null,null,null);e.default=n.exports}}]);