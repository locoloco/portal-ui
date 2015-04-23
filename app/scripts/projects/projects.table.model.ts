module ngApp.projects.models {
  import TableiciousConfig = ngApp.components.tables.directives.tableicious.TableiciousConfig;
  import TableiciousEntryDefinition = ngApp.components.tables.directives.tableicious.TableiciousEntryDefinition;

  function getParticipantSref(data_type: string) {
    return function fileSref(field: TableiciousEntryDefinition, row: TableiciousEntryDefinition[], scope, $filter: ng.IFilterService) {
      var projectId = _.find(row, function (elem) {
        return elem.id === 'project_id';
      }).val;

      var data = _.find(_.find(row, function (x: TableiciousEntryDefinition) {
        return x.id === 'summary';
      }).val.data_types, function (x: any) {
        return x.data_type === data_type;
      });

      if (!data || !data.participant_count) {
        return;
      }

      var filter = $filter("makeFilter")([{
        name: 'participants.project.project_id',
        value: projectId
      }, {name: 'files.data_type', value: data_type}]);
      return {
        state: "/search/p",
        filters: filter
      };
    }
  }

  var projectTableModel: TableiciousConfig = {
    title: 'Projects',
    order: ['project_id', 'primary_site', 'program', 'participants', 'disease_type', 'file_size', 'files', 'last_update'],
    headings: [
      {
        displayName: "ID",
        id: "project_id",
        enabled: true,
        compile: function ($scope) {
          var project_id = _.result(_.findWhere($scope.row, {'id': 'project_id'}), 'val');
          var projectName = _.result(_.findWhere($scope.row, {'id': 'name'}), 'val');
          var htm = '<a data-ng-href="/projects/' + project_id + '" data-tooltip="' + projectName +
                    '" tooltip-append-to-body="true" tooltip-placement="right">' + project_id + '</a>';
          return htm;
        }
      }, {
        displayName: "Disease Type",
        id: "disease_type",
        enabled: true,
        fieldClass: 'truncated-cell'
      }, {
        displayName: "Primary Site",
        id: "primary_site",
        enabled: true,
        fieldClass: 'truncated-cell',
        sortable: true
      }, {
        displayName: "Program",
        id: "program.name",
        enabled: true,
        sortable: true
      },
      {
        displayName: "Participants",
        id: "summary.participant_count",
        enabled: true,
        template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
          var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
            return x.id === 'summary';
          }).val;

          return $filter("number")(summary && summary.participant_count ? summary.participant_count : 0);
        },
        sref: function (field: TableiciousEntryDefinition, row: TableiciousEntryDefinition[], scope, $filter: ng.IFilterService) {
          var project_id = _.find(row, function (elem) {
            return elem.id === 'project_id';
          }).val;

          var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
            return x.id === 'summary';
          }).val;

          if (!summary || (summary && !summary.participant_count)) {
            return;
          }

          var filter = $filter("makeFilter")([{name: 'participants.project.project_id', value: project_id}]);

          return {
            state: "/search/p",
            filters: filter
          };

        },
        sortable: true,
        fieldClass: 'text-right'
      }, {
        displayName: "Available Participants per Data Type",
        id: "data_types",
        headingClass: 'text-center',
        enabled: true,
        children: [
          {
            displayName: 'Clinical',
            id: 'clinical',
            enabled: true,
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x: any) {
                return x.data_type === 'Clinical';
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            fieldClass: 'text-right',
            sref: getParticipantSref('Clinical')
          }, {
            displayName: 'Array',
            toolTipText: 'Raw microarray data',
            id: 'Array',
            enabled: true,
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x) {
                return x.data_type === 'Raw microarray data';
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            fieldClass: 'text-right',
            sref: getParticipantSref('Raw microarray data')
          }, {
            displayName: 'Seq',
            id: 'Seq',
            toolTipText: 'Raw sequencing data',
            enabled: true,
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x) {
                return x.data_type === 'Raw sequencing data';
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            fieldClass: 'text-right',
            sref: getParticipantSref('Raw sequencing data')
          }, {
            displayName: "SNV",
            toolTipText: "Simple nucleotide variation",
            id: "SNV",
            enabled: true,
            fieldClass: "text-right",
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x) {
                return x.data_type === "Simple nucleotide variation";
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            sref: getParticipantSref("Simple nucleotide variation")
          }, {
            displayName: 'CNV',
            toolTipText: 'Copy number variation',
            id: 'cnv',
            enabled: true,
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x) {
                return x.data_type === 'Copy number variation';
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            fieldClass: 'text-right',
            sref: getParticipantSref('Copy number variation')
          }, {
            displayName: 'SV',
            toolTipText: 'Structural rearrangement',
            id: 'sv',
            enabled: true,
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x) {
                return x.data_type === 'Structural rearrangement';
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            fieldClass: 'text-right',
            sref: getParticipantSref('Structural rearrangement')
          }, {
            displayName: 'Exp',
            toolTipText: 'Gene expression',
            id: 'Exp',
            enabled: true,
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x) {
                return x.data_type === 'Gene expression';
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            fieldClass: 'text-right',
            sref: getParticipantSref('Gene expression')
          }, {
            displayName: 'PExp',
            toolTipText: 'Protein expression',
            id: 'pexp',
            enabled: true,
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x) {
                return x.data_type === 'Protein expression';
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            fieldClass: 'text-right',
            sref: getParticipantSref('Protein expression')
          }, {
            displayName: 'Meth',
            toolTipText: 'DNA methylation',
            id: 'meth',
            enabled: true,
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x) {
                return x.data_type === 'DNA methylation';
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            fieldClass: 'text-right',
            sref: getParticipantSref('DNA methylation')
          }, {
            displayName: 'Other',
            id: 'other',
            enabled: true,
            template: function (field: TableiciousEntryDefinition, row, scope, $filter) {
              var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
                return x.id === 'summary';
              });

              var data = _.find(summary.val.data_types, function (x) {
                return x.data_type === 'Other';
              });

              return $filter("number")(data && data.participant_count ? data.participant_count : 0);
            },
            fieldClass: 'text-right',
            sref: getParticipantSref('Other')
          }
        ]
      }, {
        displayName: "Files",
        id: "summary.file_count",
        enabled: true,
        template: function (field, row, scope, $filter) {
          var summary = _.find(row, function (elem) {
            return elem.id === "summary";
          }).val;

          return $filter("number")(summary && summary.file_count || 0);
        },
        sref: function (field: TableiciousEntryDefinition, row: TableiciousEntryDefinition[], scope, $filter: ng.IFilterService) {
          var projectId = _.find(row, function (elem) {
            return elem.id === 'project_id';
          }).val;

          var summary = _.find(row, function (x: TableiciousEntryDefinition) {
            return x.id === 'summary';
          }).val;

          if (!summary || (summary && !summary.file_count)) {
            return;
          }

          var filter = $filter("makeFilter")([{name: 'participants.project.project_id', value: projectId}]);
          return {
            state: "/search/f",
            filters: filter
          };
        },
        sortable: true,
        fieldClass: 'text-right'
      }, {
        displayName: "File Size",
        id: "file_size",
        enabled: true,
        template: function (field, row, scope, filter) {
          var summary: TableiciousEntryDefinition = _.find(row, function (x: TableiciousEntryDefinition) {
            return x.id === 'summary';
          });
          return scope.$filter('size')(summary.val.file_size);
        },
        sortable: true,
        fieldClass: 'text-right'
      }
    ],
    fields: [
      "disease_type",
      "state",
      "primary_site",
      "project_id",
      "name"
    ],
    expand: [
      "summary",
      "summary.data_types",
      "summary.experimental_strategies",
      "program"
    ]
  };
  angular.module("projects.table.model", [])
      .value("ProjectTableModel", projectTableModel);
}
