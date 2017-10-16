/**
 * @flow
 * @relayHash ad6342223f5c9a30189e5ed1da572e04
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RepoCasesTable_relayQueryResponse = {|
  +viewer: ?{|
    +repository: ?{|
      +cases: ?{|
        +hits: ?{|
          +total: number;
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string;
              +case_id: ?string;
              +primary_site: ?string;
              +disease_type: ?string;
              +submitter_id: ?string;
              +project: ?{|
                +project_id: ?string;
                +program: ?{|
                  +name: ?string;
                |};
              |};
              +annotations: ?{|
                +hits: ?{|
                  +total: number;
                  +edges: ?$ReadOnlyArray<?{|
                    +node: ?{|
                      +annotation_id: ?string;
                    |};
                  |}>;
                |};
              |};
              +demographic: ?{|
                +gender: ?string;
                +ethnicity: ?string;
                +race: ?string;
              |};
              +diagnoses: ?{|
                +hits: ?{|
                  +edges: ?$ReadOnlyArray<?{|
                    +node: ?{|
                      +primary_diagnosis: ?string;
                      +age_at_diagnosis: ?number;
                      +vital_status: ?string;
                      +days_to_death: ?number;
                    |};
                  |}>;
                |};
              |};
              +summary: ?{|
                +data_categories: ?$ReadOnlyArray<?{|
                  +file_count: ?number;
                  +data_category: ?string;
                |}>;
                +file_count: ?number;
              |};
            |};
          |}>;
        |};
      |};
    |};
  |};
|};
*/


/*
query RepoCasesTable_relayQuery(
  $cases_size: Int
  $cases_offset: Int
  $cases_sort: [Sort]
  $filters: FiltersArgument
  $score: String
) {
  viewer {
    repository {
      cases {
        hits(score: $score, first: $cases_size, offset: $cases_offset, sort: $cases_sort, filters: $filters) {
          total
          edges {
            node {
              id
              case_id
              primary_site
              disease_type
              submitter_id
              project {
                project_id
                program {
                  name
                }
                id
              }
              annotations {
                hits(first: 1) {
                  total
                  edges {
                    node {
                      annotation_id
                      id
                    }
                  }
                }
              }
              demographic {
                gender
                ethnicity
                race
              }
              diagnoses {
                hits(first: 99) {
                  edges {
                    node {
                      primary_diagnosis
                      age_at_diagnosis
                      vital_status
                      days_to_death
                      id
                    }
                  }
                }
              }
              summary {
                data_categories {
                  file_count
                  data_category
                }
                file_count
              }
            }
          }
        }
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "cases_size",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cases_offset",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cases_sort",
        "type": "[Sort]",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "filters",
        "type": "FiltersArgument",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "score",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepoCasesTable_relayQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Root",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "name": "repository",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "RepositoryCases",
                "name": "cases",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "filters",
                        "variableName": "filters",
                        "type": "FiltersArgument"
                      },
                      {
                        "kind": "Variable",
                        "name": "first",
                        "variableName": "cases_size",
                        "type": "Int"
                      },
                      {
                        "kind": "Variable",
                        "name": "offset",
                        "variableName": "cases_offset",
                        "type": "Int"
                      },
                      {
                        "kind": "Variable",
                        "name": "score",
                        "variableName": "score",
                        "type": "String"
                      },
                      {
                        "kind": "Variable",
                        "name": "sort",
                        "variableName": "cases_sort",
                        "type": "[Sort]"
                      }
                    ],
                    "concreteType": "CaseConnection",
                    "name": "hits",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "total",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Case",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "case_id",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "primary_site",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "disease_type",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "submitter_id",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Project",
                                "name": "project",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "project_id",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Program",
                                    "name": "program",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "name",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "CaseAnnotations",
                                "name": "annotations",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "first",
                                        "value": 1,
                                        "type": "Int"
                                      }
                                    ],
                                    "concreteType": "CaseAnnotationConnection",
                                    "name": "hits",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "total",
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CaseAnnotationEdge",
                                        "name": "edges",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "CaseAnnotation",
                                            "name": "node",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "annotation_id",
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": "hits{\"first\":1}"
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Demographic",
                                "name": "demographic",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "gender",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "ethnicity",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "race",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Diagnoses",
                                "name": "diagnoses",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "first",
                                        "value": 99,
                                        "type": "Int"
                                      }
                                    ],
                                    "concreteType": "DiagnosisConnection",
                                    "name": "hits",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "DiagnosisEdge",
                                        "name": "edges",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Diagnosis",
                                            "name": "node",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "primary_diagnosis",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "age_at_diagnosis",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "vital_status",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "days_to_death",
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": "hits{\"first\":99}"
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Summary",
                                "name": "summary",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "DataCategories",
                                    "name": "data_categories",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "file_count",
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "data_category",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "file_count",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RepoCasesTable_relayQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "cases_size",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cases_offset",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cases_sort",
        "type": "[Sort]",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "filters",
        "type": "FiltersArgument",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "score",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RepoCasesTable_relayQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Root",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "name": "repository",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "RepositoryCases",
                "name": "cases",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "filters",
                        "variableName": "filters",
                        "type": "FiltersArgument"
                      },
                      {
                        "kind": "Variable",
                        "name": "first",
                        "variableName": "cases_size",
                        "type": "Int"
                      },
                      {
                        "kind": "Variable",
                        "name": "offset",
                        "variableName": "cases_offset",
                        "type": "Int"
                      },
                      {
                        "kind": "Variable",
                        "name": "score",
                        "variableName": "score",
                        "type": "String"
                      },
                      {
                        "kind": "Variable",
                        "name": "sort",
                        "variableName": "cases_sort",
                        "type": "[Sort]"
                      }
                    ],
                    "concreteType": "CaseConnection",
                    "name": "hits",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "total",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Case",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "id",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "case_id",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "primary_site",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "disease_type",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "submitter_id",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Project",
                                "name": "project",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "project_id",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Program",
                                    "name": "program",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "name",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "id",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "CaseAnnotations",
                                "name": "annotations",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "first",
                                        "value": 1,
                                        "type": "Int"
                                      }
                                    ],
                                    "concreteType": "CaseAnnotationConnection",
                                    "name": "hits",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "total",
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CaseAnnotationEdge",
                                        "name": "edges",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "CaseAnnotation",
                                            "name": "node",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "annotation_id",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "id",
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": "hits{\"first\":1}"
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Demographic",
                                "name": "demographic",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "gender",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "ethnicity",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "race",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Diagnoses",
                                "name": "diagnoses",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "first",
                                        "value": 99,
                                        "type": "Int"
                                      }
                                    ],
                                    "concreteType": "DiagnosisConnection",
                                    "name": "hits",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "DiagnosisEdge",
                                        "name": "edges",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Diagnosis",
                                            "name": "node",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "primary_diagnosis",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "age_at_diagnosis",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "vital_status",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "days_to_death",
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "args": null,
                                                "name": "id",
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": "hits{\"first\":99}"
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "Summary",
                                "name": "summary",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "DataCategories",
                                    "name": "data_categories",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "file_count",
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "args": null,
                                        "name": "data_category",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "file_count",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query RepoCasesTable_relayQuery(\n  $cases_size: Int\n  $cases_offset: Int\n  $cases_sort: [Sort]\n  $filters: FiltersArgument\n  $score: String\n) {\n  viewer {\n    repository {\n      cases {\n        hits(score: $score, first: $cases_size, offset: $cases_offset, sort: $cases_sort, filters: $filters) {\n          total\n          edges {\n            node {\n              id\n              case_id\n              primary_site\n              disease_type\n              submitter_id\n              project {\n                project_id\n                program {\n                  name\n                }\n                id\n              }\n              annotations {\n                hits(first: 1) {\n                  total\n                  edges {\n                    node {\n                      annotation_id\n                      id\n                    }\n                  }\n                }\n              }\n              demographic {\n                gender\n                ethnicity\n                race\n              }\n              diagnoses {\n                hits(first: 99) {\n                  edges {\n                    node {\n                      primary_diagnosis\n                      age_at_diagnosis\n                      vital_status\n                      days_to_death\n                      id\n                    }\n                  }\n                }\n              }\n              summary {\n                data_categories {\n                  file_count\n                  data_category\n                }\n                file_count\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
